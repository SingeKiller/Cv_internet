import { useMemo, useState } from "react";
import { useI18n } from "../i18n/I18nProvider.jsx";
import climate from "../content/climat.json";
import { links, media } from "../content/site.js";
import Reveal from "./Reveal.jsx";
import Figure from "./Figure.jsx";
import Icon from "./Icon.jsx";
import "./ClimateProject.css";

const WIDTH = 760;
const HEIGHT = 320;
const STRIPES_HEIGHT = 54;
const MARGIN = { left: 46, right: 18, top: 16, bottom: 30 };
const PLOT_WIDTH = WIDTH - MARGIN.left - MARGIN.right;

const YEARS = climate.years;
const FIRST = YEARS[0];
const LAST = YEARS[YEARS.length - 1];
const Y_MIN = Math.floor(Math.min(...climate.mean) - 0.4);
const Y_MAX = Math.ceil(Math.max(...climate.mean) + 0.2);
const STRIPE_WIDTH = PLOT_WIDTH / (LAST - FIRST);
const ANOMALY_LIMIT = Math.max(...climate.anomaly.map(Math.abs));

const toX = (year) => MARGIN.left + ((year - FIRST) / (LAST - FIRST)) * PLOT_WIDTH;
const toY = (value) => MARGIN.top + (1 - (value - Y_MIN) / (Y_MAX - Y_MIN)) * (HEIGHT - MARGIN.top - MARGIN.bottom);

const linearAt = (year) => climate.linear.intercept + climate.linear.slope * year;
const halfWidthAt = (year) =>
  climate.linear.tCrit *
  climate.linear.sigma *
  Math.sqrt(1 / climate.linear.n + (year - climate.linear.xMean) ** 2 / climate.linear.sxx);
const segmentedAt = (year) => {
  const [b0, b1, b2] = climate.segmented.coef;
  const shifted = year - climate.segmented.breakpoint;
  return b0 + b1 * shifted + b2 * Math.max(0, shifted);
};

const GRID = Array.from({ length: 121 }, (_, i) => FIRST + (i * (LAST - FIRST)) / 120);
const pathThrough = (points) => points.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join("");
const LINEAR_PATH = pathThrough(GRID.map((year) => [toX(year), toY(linearAt(year))]));
const BAND_PATH = `${pathThrough([
  ...GRID.map((year) => [toX(year), toY(linearAt(year) + halfWidthAt(year))]),
  ...GRID.slice().reverse().map((year) => [toX(year), toY(linearAt(year) - halfWidthAt(year))]),
])}Z`;
const SEGMENTED_PATH = pathThrough(GRID.map((year) => [toX(year), toY(segmentedAt(year))]));
const X_TICKS = YEARS.filter((year) => year % 10 === 0);
const Y_TICKS = Array.from({ length: Y_MAX - Y_MIN + 1 }, (_, i) => Y_MIN + i);

const STRIPE_STOPS = [
  [-1, [33, 102, 172]],
  [-0.5, [146, 197, 222]],
  [0, [247, 247, 247]],
  [0.5, [244, 165, 130]],
  [1, [178, 24, 43]],
];

function stripeColor(anomaly) {
  const t = Math.max(-1, Math.min(1, anomaly / ANOMALY_LIMIT));
  let k = 0;
  while (k < STRIPE_STOPS.length - 2 && t > STRIPE_STOPS[k + 1][0]) k++;
  const [t0, c0] = STRIPE_STOPS[k];
  const [t1, c1] = STRIPE_STOPS[k + 1];
  const f = (t - t0) / (t1 - t0);
  const channel = (i) => Math.round(c0[i] + (c1[i] - c0[i]) * f);
  return `rgb(${channel(0)}, ${channel(1)}, ${channel(2)})`;
}

const fill = (template, values) => template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? values[key] : match));

export default function ClimateProject({ onZoom }) {
  const { t, lang } = useI18n();
  const c = t.projects.climate;
  const [showLinear, setShowLinear] = useState(true);
  const [showSegmented, setShowSegmented] = useState(false);
  const [active, setActive] = useState(null);

  const format = useMemo(() => {
    const locale = lang === "fr" ? "fr-FR" : "en-GB";
    const cache = {};
    return (value, digits = 2) => {
      cache[digits] ??= new Intl.NumberFormat(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits });
      return cache[digits].format(value);
    };
  }, [lang]);
  const signed = (value, digits = 1) => `${value > 0 ? "+" : value < 0 ? "−" : ""}${format(Math.abs(value), digits)}`;

  const values = {
    first: FIRST,
    last: LAST,
    decade: format(climate.linear.decade),
    refStart: climate.referenceNormal[0],
    refEnd: climate.referenceNormal[1],
    year: climate.segmented.breakpoint,
  };

  const results = [
    {
      key: "trend",
      data: {
        decade: format(climate.linear.decade),
        first: FIRST,
        last: LAST,
        low: format(climate.linear.ciAdjusted[0]),
        high: format(climate.linear.ciAdjusted[1]),
      },
    },
    {
      key: "recent",
      data: {
        decade: format(climate.recent.decade),
        start: climate.recent.start,
        low: format(climate.recent.ciAdjusted[0]),
        high: format(climate.recent.ciAdjusted[1]),
        lastDecade: format(climate.lastDecade.anomaly, 1),
        refStart: climate.referenceNormal[0],
        refEnd: climate.referenceNormal[1],
      },
    },
    {
      key: "hot",
      data: {
        ratio: format(climate.hot.ratio),
        oldMean: format(climate.hot.oldMean, 1),
        newMean: format(climate.hot.newMean, 1),
        low: format(climate.hot.ci[0]),
        high: format(climate.hot.ci[1]),
      },
    },
    {
      key: "neighbours",
      data: {
        difference: format(climate.neighbours.differenceDecade),
        count: climate.neighbours.count,
        composite: format(climate.neighbours.compositeDecade),
        low: format(climate.neighbours.differenceCi[0]),
        high: format(climate.neighbours.differenceCi[1]),
      },
    },
  ];

  const figureValues = {
    r1: format(climate.residuals.r1),
    difference: format(climate.normals.difference),
    low: format(climate.normals.ci[0]),
    high: format(climate.normals.ci[1]),
  };

  function yearFromPointer(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * WIDTH;
    const year = Math.round(FIRST + ((x - MARGIN.left) / PLOT_WIDTH) * (LAST - FIRST));
    return Math.max(FIRST, Math.min(LAST, year)) - FIRST;
  }

  function onKeyDown(event) {
    const moves = {
      ArrowRight: (index) => Math.min(YEARS.length - 1, (index ?? -1) + 1),
      ArrowLeft: (index) => Math.max(0, (index ?? YEARS.length) - 1),
      Home: () => 0,
      End: () => YEARS.length - 1,
    };
    if (!moves[event.key]) return;
    event.preventDefault();
    setActive((index) => moves[event.key](index));
  }

  const activeYear = active === null ? null : YEARS[active];
  const readout =
    active === null
      ? c.chart.hint
      : fill(c.chart.readout, {
          year: activeYear,
          value: format(climate.mean[active]),
          anomaly: signed(climate.anomaly[active], 2),
        });

  return (
    <Reveal as="article" id="projet-climat" className="climate" aria-labelledby="climate-title">
      <header className="climate__head">
        <div>
          <span className="badge">
            <Icon name="regression" />
            {c.badge}
          </span>
          <p className="climate__meta">{c.meta}</p>
          <h3 id="climate-title" className="climate__title">
            {c.title}
          </h3>
          <p className="climate__summary">{c.summary}</p>
        </div>
        <div className="climate__aside">
          <ul className="chip-list" aria-label="Technologies">
            {c.stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
          <div className="climate__links">
            <a className="btn btn--primary btn--small" href={links.climateRepo} target="_blank" rel="noopener noreferrer">
              <Icon name="github" />
              {c.links.code}
            </a>
            <a className="btn btn--ghost btn--small" href={links.climateData} target="_blank" rel="noopener noreferrer">
              <Icon name="database" />
              {c.links.data}
            </a>
          </div>
        </div>
      </header>

      <div className="climate__viz">
        <div className="climate__toolbar">
          <p className="climate__stripes-title">{fill(c.chart.stripesTitle, values)}</p>
          <div className="climate__toggles">
            <button type="button" className="toggle" aria-pressed={showLinear} onClick={() => setShowLinear((v) => !v)}>
              <span className="toggle__swatch toggle__swatch--linear" aria-hidden="true" />
              {c.chart.toggleLinear}
            </button>
            <button type="button" className="toggle" aria-pressed={showSegmented} onClick={() => setShowSegmented((v) => !v)}>
              <span className="toggle__swatch toggle__swatch--segmented" aria-hidden="true" />
              {c.chart.toggleSegmented}
            </button>
          </div>
        </div>

        <div
          className="climate__chart"
          tabIndex={0}
          role="group"
          aria-label={fill(c.chart.label, values)}
          aria-describedby="climate-readout"
          onPointerMove={(event) => setActive(yearFromPointer(event))}
          onPointerLeave={() => setActive(null)}
          onKeyDown={onKeyDown}
          onBlur={() => setActive(null)}
        >
          <svg className="climate__stripes" viewBox={`0 0 ${WIDTH} ${STRIPES_HEIGHT}`} role="img" aria-label={fill(c.chart.stripesLabel, values)}>
            {YEARS.map((year, i) => (
              <rect
                key={year}
                x={toX(year) - STRIPE_WIDTH / 2}
                y="0"
                width={STRIPE_WIDTH + 0.6}
                height={STRIPES_HEIGHT}
                fill={stripeColor(climate.anomaly[i])}
                opacity={active === null || active === i ? 1 : 0.55}
              />
            ))}
          </svg>

          <svg className="climate__plot" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-hidden="true">
            <g className="climate__grid">
              {Y_TICKS.map((value) => (
                <line key={value} x1={MARGIN.left} x2={WIDTH - MARGIN.right} y1={toY(value)} y2={toY(value)} />
              ))}
            </g>
            <g className="climate__axis">
              {Y_TICKS.map((value) => (
                <text key={value} x={MARGIN.left - 10} y={toY(value) + 4} textAnchor="end">
                  {value}
                </text>
              ))}
              {X_TICKS.map((year) => (
                <text key={year} x={toX(year)} y={HEIGHT - 8} textAnchor="middle">
                  {year}
                </text>
              ))}
            </g>
            {showLinear && (
              <>
                <path className="climate__band" d={BAND_PATH} />
                <path className="climate__linear" d={LINEAR_PATH} />
              </>
            )}
            {showSegmented && <path className="climate__segmented" d={SEGMENTED_PATH} />}
            {activeYear !== null && (
              <line
                className="climate__cursor"
                x1={toX(activeYear)}
                x2={toX(activeYear)}
                y1={MARGIN.top}
                y2={HEIGHT - MARGIN.bottom}
              />
            )}
            {YEARS.map((year, i) => (
              <circle
                key={year}
                className={`climate__point${active === i ? " is-active" : ""}`}
                cx={toX(year)}
                cy={toY(climate.mean[i])}
                r={active === i ? 6 : 3.4}
              />
            ))}
          </svg>
        </div>

        <div className="climate__legend-row">
          <ul className="climate__legend" aria-hidden="true">
            <li className="climate__legend-observed">{c.chart.legendObserved}</li>
            {showLinear && <li className="climate__legend-linear">{c.chart.legendLinear}</li>}
            {showSegmented && <li className="climate__legend-segmented">{fill(c.chart.legendSegmented, values)}</li>}
          </ul>
          <p id="climate-readout" className={`climate__readout${active === null ? "" : " is-active"}`} aria-live="polite">
            {readout}
          </p>
        </div>
      </div>

      <h4 className="subheading climate__subheading">{c.resultsTitle}</h4>
      <ul className="climate__results">
        {results.map(({ key, data }) => (
          <li key={key} className="climate__result">
            <span className="climate__result-value">{fill(c.results[key].value, data)}</span>
            <span className="climate__result-unit">{fill(c.results[key].unit, data)}</span>
            <span className="climate__result-text">{fill(c.results[key].text, data)}</span>
          </li>
        ))}
      </ul>

      <h4 className="subheading climate__subheading">{c.stepsTitle}</h4>
      <ol className="climate__steps">
        {c.steps.map((step, i) => (
          <li key={step.title} className="climate__step">
            <span className="climate__step-index">{String(i + 1).padStart(2, "0")}</span>
            <h5 className="climate__step-title">
              <Icon name={step.icon} />
              {step.title}
            </h5>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>

      <h4 className="subheading climate__subheading">{c.figuresTitle}</h4>
      <div className="climate__figures">
        {c.figures.map((figure) => (
          <Figure
            key={figure.id}
            src={media.climateFigures[figure.id]}
            alt={figure.alt}
            caption={fill(figure.caption, figureValues)}
            onZoom={onZoom}
          />
        ))}
      </div>
    </Reveal>
  );
}
