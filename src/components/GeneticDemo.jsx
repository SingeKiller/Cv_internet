import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "../i18n/I18nProvider.jsx";
import { useInView } from "../hooks/useInView.js";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";
import Icon from "./Icon.jsx";
import "./GeneticDemo.css";

const POPULATION = 100;
const PARENTS = 25;
const GENERATIONS = 25;
const INIT_SPREAD = 0.3;
const CHILD_SIGMA = 0.03;
const STAGNATION = 3;
const STEP_MS = 420;

const TRUE_PARAMS = [10, 2, 5, 0.5];
const REFERENCE = [8, 1.6, 6, 0.6];
const PARAM_NAMES = ["a", "b", "c", "d"];
const NOISE = 0.35;
const POINTS = 40;
const X_MAX = 10;

const sigmoid = (p, x) => p[0] / (1 + Math.exp(-p[1] * (x - p[2]))) + p[3];

function createRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gaussian(random) {
  let u = 0;
  while (u === 0) u = random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * random());
}

function rmse(params, data) {
  let sum = 0;
  for (const point of data) {
    const gap = sigmoid(params, point.x) - point.y;
    sum += gap * gap;
  }
  return Math.sqrt(sum / data.length);
}

function rank(population, data) {
  return population.map((params) => ({ params, cost: rmse(params, data) })).sort((a, b) => a.cost - b.cost);
}

function createRun(seed) {
  const random = createRandom(seed);
  const data = Array.from({ length: POINTS }, (_, i) => {
    const x = ((i + 0.5) * X_MAX) / POINTS;
    return { x, y: sigmoid(TRUE_PARAMS, x) + NOISE * gaussian(random) };
  });
  const population = Array.from({ length: POPULATION }, () =>
    REFERENCE.map((value) => value * (1 + INIT_SPREAD * (2 * random() - 1))),
  );
  const ranked = rank(population, data);
  return { random, data, ranked, generation: 0, history: [ranked[0].cost], widen: 1, stalled: 0 };
}

function evolve(run) {
  const { random, data, ranked } = run;
  const parents = ranked.slice(0, PARENTS).map((entry) => entry.params);
  const best = parents[0];
  const sigma = CHILD_SIGMA * run.widen;
  const children = [];

  while (parents.length + children.length < POPULATION) {
    const a = parents[Math.floor(random() * PARENTS)];
    const b = parents[Math.floor(random() * PARENTS)];
    const mix = random();
    const pull = random();
    children.push(
      best.map((value, i) => {
        const blend = mix * a[i] + (1 - mix) * b[i];
        return (pull * value + (1 - pull) * blend) * (1 + sigma * gaussian(random));
      }),
    );
  }

  const next = rank([...parents, ...children], data);
  const improved = next[0].cost < ranked[0].cost * 0.995;
  const stalled = improved ? 0 : run.stalled + 1;
  const widen = improved ? 1 : stalled >= STAGNATION ? Math.min(run.widen * 2, 10) : run.widen;

  return {
    ...run,
    ranked: next,
    generation: run.generation + 1,
    history: [...run.history, next[0].cost],
    stalled: stalled >= STAGNATION ? 0 : stalled,
    widen,
  };
}

const CHART = { width: 640, height: 360, left: 42, right: 14, top: 14, bottom: 34 };
const Y_MIN = -1.5;
const Y_MAX = 12.5;
const toX = (x) => CHART.left + (x / X_MAX) * (CHART.width - CHART.left - CHART.right);
const toY = (y) => CHART.top + (1 - (y - Y_MIN) / (Y_MAX - Y_MIN)) * (CHART.height - CHART.top - CHART.bottom);
const SAMPLES = Array.from({ length: 81 }, (_, i) => (i * X_MAX) / 80);

function curvePath(params) {
  return SAMPLES.map((x, i) => {
    const y = Math.min(Y_MAX + 2, Math.max(Y_MIN - 2, sigmoid(params, x)));
    return `${i ? "L" : "M"}${toX(x).toFixed(1)} ${toY(y).toFixed(1)}`;
  }).join("");
}

const SPARK = { width: 240, height: 64, pad: 6 };

function sparkGeometry(history) {
  const top = Math.log(Math.max(history[0], NOISE * 1.5));
  const bottom = Math.log(NOISE * 0.75);
  const x = (i) => SPARK.pad + (i / GENERATIONS) * (SPARK.width - 2 * SPARK.pad);
  const y = (v) => SPARK.pad + ((top - Math.log(v)) / (top - bottom)) * (SPARK.height - 2 * SPARK.pad);
  return {
    path: history.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(""),
    noiseY: y(NOISE),
  };
}

export default function GeneticDemo() {
  const { t, lang } = useI18n();
  const d = t.projects.featured.demo;
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { threshold: 0.35 });
  const seedRef = useRef(20260934);
  const runRef = useRef(null);
  const autoplayed = useRef(false);
  const [, setTick] = useState(0);
  const [status, setStatus] = useState("idle");
  const [showTruth, setShowTruth] = useState(false);

  if (runRef.current === null) runRef.current = createRun(seedRef.current);

  useEffect(() => {
    if (status !== "running") return undefined;
    const timer = setInterval(() => {
      if (runRef.current.generation >= GENERATIONS) return;
      runRef.current = evolve(runRef.current);
      setTick((n) => n + 1);
      if (runRef.current.generation >= GENERATIONS) setStatus("done");
    }, STEP_MS);
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => {
    if (inView && !reduced && !autoplayed.current) {
      autoplayed.current = true;
      setStatus("running");
    }
  }, [inView, reduced]);

  function restart() {
    seedRef.current += 1;
    runRef.current = createRun(seedRef.current);
    setTick((n) => n + 1);
    setStatus("running");
  }

  function toggle() {
    setStatus((current) => (current === "running" ? "paused" : "running"));
  }

  const locale = lang === "fr" ? "fr-FR" : "en-GB";
  const format2 = useMemo(() => new Intl.NumberFormat(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }), [locale]);
  const format3 = useMemo(() => new Intl.NumberFormat(locale, { minimumFractionDigits: 3, maximumFractionDigits: 3 }), [locale]);

  const run = runRef.current;
  const best = run.ranked[0];
  const parents = run.ranked.slice(1, PARENTS);
  const spark = sparkGeometry(run.history);
  const bestPath = curvePath(best.params);
  const converged = best.cost < NOISE * 1.15;

  const mainLabel = status === "running" ? d.pause : status === "paused" ? d.resume : d.run;

  return (
    <div ref={rootRef} className="genetic-demo" role="group" aria-labelledby="genetic-demo-title">
      <div className="genetic-demo__chart">
        <svg
          className="gd-svg"
          viewBox={`0 0 ${CHART.width} ${CHART.height}`}
          role="img"
          aria-label={d.chartLabel}
        >
          <g className="gd-grid">
            {[0, 2, 4, 6, 8, 10].map((x) => (
              <line key={`x${x}`} x1={toX(x)} x2={toX(x)} y1={CHART.top} y2={CHART.height - CHART.bottom} />
            ))}
            {[0, 2, 4, 6, 8, 10, 12].map((y) => (
              <line key={`y${y}`} x1={CHART.left} x2={CHART.width - CHART.right} y1={toY(y)} y2={toY(y)} />
            ))}
          </g>
          <g className="gd-axis" aria-hidden="true">
            {[0, 2, 4, 6, 8, 10].map((x) => (
              <text key={`tx${x}`} x={toX(x)} y={CHART.height - 12} textAnchor="middle">
                {x}
              </text>
            ))}
            {[0, 4, 8, 12].map((y) => (
              <text key={`ty${y}`} x={CHART.left - 10} y={toY(y) + 4} textAnchor="end">
                {y}
              </text>
            ))}
          </g>

          <g aria-hidden="true">
            {parents.map((entry, i) => (
              <path key={i} className="gd-parent" d={curvePath(entry.params)} />
            ))}
            {showTruth && <path className="gd-truth" d={curvePath(TRUE_PARAMS)} />}
            {run.data.map((point, i) => (
              <circle key={i} className="gd-point" cx={toX(point.x)} cy={toY(point.y)} r="3.6" />
            ))}
            <path className="gd-best" d={bestPath} style={{ d: `path("${bestPath}")` }} />
          </g>
        </svg>

        <ul className="gd-legend" aria-hidden="true">
          <li className="gd-legend__data">{d.legendData}</li>
          <li className="gd-legend__best">{d.legendBest}</li>
          <li className="gd-legend__parents">{d.legendParents}</li>
          {showTruth && <li className="gd-legend__truth">{d.legendTruth}</li>}
        </ul>
      </div>

      <div className="genetic-demo__panel">
        <div>
          <h4 id="genetic-demo-title" className="gd-title">
            <Icon name="spark" />
            {d.title}
          </h4>
          <p className="gd-intro">{d.intro}</p>
        </div>

        <div className="gd-stats">
          <div className="gd-stat">
            <span className="gd-stat__label">{d.generation}</span>
            <span className="gd-stat__value">
              {run.generation}
              <small> / {GENERATIONS}</small>
            </span>
            <span className="gd-progress" style={{ "--p": run.generation / GENERATIONS }} aria-hidden="true">
              <span />
            </span>
          </div>
          <div className="gd-stat">
            <span className="gd-stat__label">{d.error}</span>
            <span className={`gd-stat__value${converged ? " is-converged" : ""}`}>{format3.format(best.cost)}</span>
            <span className="gd-stat__hint">
              {d.noise} σ = {format2.format(NOISE)}
            </span>
          </div>
        </div>

        <svg className="gd-spark" viewBox={`0 0 ${SPARK.width} ${SPARK.height}`} aria-hidden="true">
          <line className="gd-spark__noise" x1={SPARK.pad} x2={SPARK.width - SPARK.pad} y1={spark.noiseY} y2={spark.noiseY} />
          <path className="gd-spark__line" d={spark.path} />
        </svg>

        <div>
          <p className="gd-stat__label">{d.params}</p>
          <dl className="gd-params">
            {PARAM_NAMES.map((name, i) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{format2.format(best.params[i])}</dd>
                {showTruth && <dd className="gd-params__true">{format2.format(TRUE_PARAMS[i])}</dd>}
              </div>
            ))}
          </dl>
        </div>

        <label className="gd-toggle">
          <input type="checkbox" checked={showTruth} onChange={(event) => setShowTruth(event.target.checked)} />
          <span>{d.showTruth}</span>
        </label>

        <div className="gd-actions">
          {status !== "done" && (
            <button type="button" className="btn btn--primary btn--small" onClick={toggle}>
              <Icon name={status === "running" ? "pause" : "play"} />
              {mainLabel}
            </button>
          )}
          <button
            type="button"
            className={`btn btn--small ${status === "done" ? "btn--primary" : "btn--ghost"}`}
            onClick={restart}
          >
            <Icon name="refresh" />
            {d.restart}
          </button>
        </div>

        <p className="gd-message" aria-live="polite">
          {status === "done" ? (converged ? d.converged : d.finished) : ""}
        </p>
      </div>
    </div>
  );
}
