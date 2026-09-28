import { useRef, useState } from "react";
import { useI18n } from "../i18n/I18nProvider.jsx";
import { links, media } from "../content/site.js";
import Reveal from "./Reveal.jsx";
import Figure from "./Figure.jsx";
import GeneticDemo from "./GeneticDemo.jsx";
import Icon from "./Icon.jsx";

const STEPS = ["model", "implement", "calibrate", "results"];

function withSubscripts(text) {
  return text.split(/(\b[A-Za-z]+_[A-Za-z0-9]+\b)/g).map((part, i) => {
    const match = part.match(/^([A-Za-z]+)_([A-Za-z0-9]+)$/);
    return match ? (
      <span key={i} className="nowrap">
        {match[1]}
        <sub>{match[2]}</sub>
      </span>
    ) : (
      part
    );
  });
}

function Flux({ name }) {
  return (
    <msub>
      <mi>J</mi>
      <mtext>{name}</mtext>
    </msub>
  );
}

function Derivative({ symbol, sub }) {
  return (
    <mfrac>
      <mrow>
        <mi>d</mi>
        {sub ? (
          <msub>
            <mi>{symbol}</mi>
            <mi>{sub}</mi>
          </msub>
        ) : (
          <mi>{symbol}</mi>
        )}
      </mrow>
      <mrow>
        <mi>d</mi>
        <mi>t</mi>
      </mrow>
    </mfrac>
  );
}

function OdeSystem() {
  return (
    <math display="block" className="math">
      <mrow>
        <mo>{"{"}</mo>
        <mtable columnalign="left" rowspacing="1em">
          <mtr>
            <mtd>
              <Derivative symbol="NADH" sub="m" />
              <mo>=</mo>
              <mi>γ</mi>
              <mo stretchy="false">(</mo>
              <Flux name="PDH" />
              <mo>−</mo>
              <Flux name="o" />
              <mo stretchy="false">)</mo>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <Derivative symbol="Ca" sub="m" />
              <mo>=</mo>
              <msub>
                <mi>f</mi>
                <mi>m</mi>
              </msub>
              <mo stretchy="false">(</mo>
              <Flux name="uni" />
              <mo>−</mo>
              <Flux name="NaCa" />
              <mo stretchy="false">)</mo>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <Derivative symbol="ΔΨ" />
              <mo>=</mo>
              <mfrac>
                <mn>1</mn>
                <msub>
                  <mi>C</mi>
                  <mi>m</mi>
                </msub>
              </mfrac>
              <mo stretchy="false">(</mo>
              <Flux name="Hres" />
              <mo>−</mo>
              <Flux name="Hatp" />
              <mo>−</mo>
              <Flux name="Hleak" />
              <mo>−</mo>
              <Flux name="ANT" />
              <mo>−</mo>
              <Flux name="NaCa" />
              <mo>−</mo>
              <mn>2</mn>
              <Flux name="uni" />
              <mo stretchy="false">)</mo>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <Derivative symbol="ADP" sub="m" />
              <mo>=</mo>
              <mi>γ</mi>
              <mo stretchy="false">(</mo>
              <Flux name="ANT" />
              <mo>−</mo>
              <Flux name="F1F0" />
              <mo stretchy="false">)</mo>
            </mtd>
          </mtr>
        </mtable>
      </mrow>
    </math>
  );
}

function SquaredGap({ symbol, index }) {
  return (
    <msup>
      <mrow>
        <mo>(</mo>
        <msubsup>
          <mi>{symbol}</mi>
          <mi>{index}</mi>
          <mtext>sim</mtext>
        </msubsup>
        <mo stretchy="false">(</mo>
        <mi>X</mi>
        <mo stretchy="false">)</mo>
        <mo>−</mo>
        <msubsup>
          <mi>{symbol}</mi>
          <mi>{index}</mi>
          <mtext>exp</mtext>
        </msubsup>
        <mo>)</mo>
      </mrow>
      <mn>2</mn>
    </msup>
  );
}

function CostFunction() {
  return (
    <math display="block" className="math">
      <mi>J</mi>
      <mo stretchy="false">(</mo>
      <mi>X</mi>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>k</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mn>4</mn>
      </munderover>
      <SquaredGap symbol="P" index="k" />
      <mo>+</mo>
      <munder>
        <mo>∑</mo>
        <mi>r</mi>
      </munder>
      <SquaredGap symbol="R" index="r" />
    </math>
  );
}

export default function FeaturedProject({ onZoom }) {
  const { t } = useI18n();
  const f = t.projects.featured;
  const s = f.steps;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(STEPS[0]);
  const tabRefs = useRef({});

  function onKeyDown(event) {
    const index = STEPS.indexOf(active);
    const moves = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: STEPS.length - 1 };
    if (!(event.key in moves)) return;
    event.preventDefault();
    const next = STEPS[(moves[event.key] + STEPS.length) % STEPS.length];
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  const panel = (key) => ({
    role: "tabpanel",
    id: `panel-${key}`,
    "aria-labelledby": `tab-${key}`,
    hidden: active !== key,
    tabIndex: 0,
    className: "tab-panel",
  });

  return (
    <Reveal as="article" id="projet-mitochondrie" className="featured" aria-labelledby="featured-title">
      <header className="featured__head">
        <div className="featured__intro">
          <span className="badge">
            <Icon name="graduation" />
            {f.badge}
          </span>
          <p className="featured__meta">{f.meta}</p>
          <h3 id="featured-title" className="featured__title">
            {f.title}
          </h3>
          <p className="featured__summary">{f.summary}</p>
          <p className="featured__team">
            <Icon name="users" />
            {f.team}
          </p>
          <p className="featured__role">{f.role}</p>
        </div>
        <div className="featured__aside">
          <Figure src={media.mitoCalibration} alt={f.figure.alt} caption={f.figure.caption} onZoom={onZoom} />
          <ul className="chip-list" aria-label="Technologies">
            {f.stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <button
        type="button"
        className="featured__toggle"
        aria-expanded={open}
        aria-controls="mito-details"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? f.close : f.open}
        <Icon name="chevron" />
      </button>

      <div id="mito-details" className="featured__details" hidden={!open}>
        <div className="tabs" role="tablist" aria-label={f.tabsLabel} onKeyDown={onKeyDown}>
          {STEPS.map((key, i) => (
            <button
              key={key}
              ref={(element) => {
                tabRefs.current[key] = element;
              }}
              type="button"
              role="tab"
              id={`tab-${key}`}
              aria-selected={active === key}
              aria-controls={`panel-${key}`}
              tabIndex={active === key ? 0 : -1}
              className="tab"
              onClick={() => setActive(key)}
            >
              <span className="tab__index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s[key].label}
            </button>
          ))}
        </div>

        <div {...panel("model")}>
          <div className="panel-grid">
            <div className="panel-text">
              <h4 className="panel-title">{s.model.title}</h4>
              {s.model.text.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              <ul className="variables">
                {s.model.variables.map((variable) => (
                  <li key={variable.symbol} className="variable">
                    <span className="variable__symbol">
                      {variable.symbol}
                      {variable.sub && <sub>{variable.sub}</sub>}
                    </span>
                    <span className="variable__label">{variable.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="math-block">
                <OdeSystem />
              </div>
              <p className="callout">
                <Icon name="bulb" />
                <span>{withSubscripts(s.model.extension)}</span>
              </p>
            </div>
          </div>
        </div>

        <div {...panel("implement")}>
          <h4 className="panel-title">{s.implement.title}</h4>
          <ol className="pipeline">
            {s.implement.pipeline.map((step, i) => (
              <li key={step.name} className="pipeline__step">
                <span className="pipeline__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pipeline__name">{step.name}</span>
                <span className="pipeline__text">{step.text}</span>
              </li>
            ))}
          </ol>
          <div className="panel-grid">
            <div className="panel-text">
              {s.implement.text.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              <Figure
                className="figure--compact"
                src={media.rk4Validation}
                alt={s.implement.figureRk4.alt}
                caption={s.implement.figureRk4.caption}
                onZoom={onZoom}
              />
            </div>
            <Figure
              src={media.mitoCalciumPulses}
              alt={s.implement.figure.alt}
              caption={s.implement.figure.caption}
              onZoom={onZoom}
            />
          </div>
        </div>

        <div {...panel("calibrate")}>
          <div className="panel-grid">
            <div className="panel-text">
              <h4 className="panel-title">{s.calibrate.title}</h4>
              {s.calibrate.text.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              <div className="math-block">
                <CostFunction />
              </div>
              <p className="panel-note">{s.calibrate.costNote}</p>
            </div>
            <div>
              <h5 className="card-label">{s.calibrate.specsTitle}</h5>
              <dl className="specs">
                {s.calibrate.specs.map((spec) => (
                  <div key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div {...panel("results")}>
          <div className="panel-grid panel-grid--results">
            <Figure
              src={media.mitoCalibration}
              alt={s.results.figure.alt}
              caption={s.results.figure.caption}
              onZoom={onZoom}
            />
            <div className="panel-text">
              <h4 className="panel-title">{s.results.title}</h4>
              <ul className="highlights">
                {s.results.highlights.map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h5 className="card-label">{s.results.perspectivesTitle}</h5>
              <p>{s.results.perspectives}</p>
              <div className="panel-links">
                <a className="btn btn--primary btn--small" href={links.mitoReport} target="_blank" rel="noopener noreferrer">
                  <Icon name="file" />
                  {s.results.reportLink}
                </a>
                <a className="btn btn--ghost btn--small" href={links.bertramPaper} target="_blank" rel="noopener noreferrer">
                  <Icon name="external" />
                  {s.results.paperLink}
                </a>
              </div>
            </div>
          </div>
        </div>

        {open && (
          <div className="featured__demo">
            <GeneticDemo />
          </div>
        )}
      </div>
    </Reveal>
  );
}
