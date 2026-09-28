import { Fragment, useRef, useState } from "react";
import { useI18n } from "../i18n/I18nProvider.jsx";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";
import { useInView } from "../hooks/useInView.js";
import { useCountUp } from "../hooks/useCountUp.js";
import { media, site } from "../content/site.js";
import HeatField from "./HeatField.jsx";
import Icon from "./Icon.jsx";
import "./Hero.css";

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;
  const reduced = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);

  return (
    <section id="top" className="hero scope-dark" aria-labelledby="hero-title">
      <HeatField className="hero__canvas" paused={paused} still={reduced} />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__veil" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="status-pill hero-in" style={{ "--d": "0ms" }}>
            <span className="status-pill__dot" aria-hidden="true" />
            {h.status}
          </p>

          <h1 id="hero-title" className="hero__name hero-in" style={{ "--d": "90ms" }}>
            <span>{h.firstName}</span> <span className="hero__last">{h.lastName}</span>
          </h1>

          <p className="hero__tagline">
            {h.tagline.map((word, i) => (
              <Fragment key={word}>
                <span style={{ "--i": i }}>{word}</span>{" "}
              </Fragment>
            ))}
          </p>

          <p className="hero__pitch hero-in" style={{ "--d": "700ms" }}>
            {h.pitch}
          </p>

          <div className="hero__actions hero-in" style={{ "--d": "820ms" }}>
            <a className="btn btn--primary" href="#projets">
              {h.ctaPrimary}
              <Icon name="arrow-right" />
            </a>
            <a className="btn btn--ghost" href={site.cvUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="download" />
              {h.ctaSecondary}
            </a>
            <span className="hero__socials">
              <a className="icon-btn" href={site.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" />
              </a>
              <a className="icon-btn" href={site.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icon name="github" />
              </a>
              <a className="icon-btn" href={`mailto:${site.email}`} aria-label={`${t.contact.channels.email} ${site.email}`}>
                <Icon name="mail" />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="hero__controls hero-in" style={{ "--d": "1100ms" }}>
        <p className="hero__caption">
          <span>{h.simCaption}</span>
          {!reduced && <span className="hero__hint">{h.simHint}</span>}
        </p>
        {!reduced && (
          <button
            type="button"
            className="icon-btn"
            onClick={() => setPaused((value) => !value)}
            aria-pressed={paused}
            aria-label={paused ? h.simPlay : h.simPause}
            title={paused ? h.simPlay : h.simPause}
          >
            <Icon name={paused ? "play" : "pause"} />
          </button>
        )}
      </div>

      <a className="hero__scroll" href="#profil" aria-label={h.scrollHint}>
        <Icon name="arrow-down" />
      </a>
    </section>
  );
}

function Metric({ metric, projectCount }) {
  const ref = useRef(null);
  const inView = useInView(ref, { rootMargin: "0px", threshold: 0 });
  const target = metric.id === "projects" ? projectCount : metric.value;
  const isNumber = typeof target === "number";
  const count = useCountUp(isNumber ? target : null, inView);
  const suffix = metric.suffix ?? "";

  return (
    <li ref={ref} className={`metric metric--${metric.id}`}>
      <span className="metric__value" aria-hidden="true">
        {metric.id === "master" && (
          <img className="metric__logo" src={media.universityLogo} alt="" width="40" height="40" />
        )}
        <span className="metric__number">
          {isNumber ? count : target}
          {suffix && <span className="metric__suffix">{suffix}</span>}
        </span>
      </span>
      <span className="metric__label">
        <span className="sr-only">
          {target}
          {suffix}{" "}
        </span>
        {metric.label}
      </span>
    </li>
  );
}

export function Metrics() {
  const { t } = useI18n();
  const projectCount = 2 + t.projects.others.length;

  return (
    <div className="metrics">
      <div className="container">
        <ul className="metrics__grid hero-in" style={{ "--d": "950ms" }}>
          {t.metrics.map((metric) => (
            <Metric key={metric.id} metric={metric} projectCount={projectCount} />
          ))}
        </ul>
      </div>
    </div>
  );
}
