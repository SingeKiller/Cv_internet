import { useI18n } from "../i18n/I18nProvider.jsx";
import { links, media, site } from "../content/site.js";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";

const HREFS = { ...links, repo: site.repoUrl };

const AGENT_NODES = [
  [60, 70],
  [160, 40],
  [260, 80],
  [110, 150],
  [220, 160],
  [320, 140],
  [180, 100],
];
const AGENT_EDGES = [
  [0, 1],
  [1, 6],
  [6, 2],
  [0, 3],
  [3, 6],
  [6, 4],
  [4, 5],
  [2, 5],
  [3, 4],
];

function ProjectMedia({ project }) {
  if (project.media === "heat") {
    return (
      <div className="project-card__media project-card__media--video">
        <video controls muted playsInline preload="none" poster={media.heatScreenshot} aria-label={project.videoLabel}>
          <source src={media.heatVideo} type="video/mp4" />
        </video>
      </div>
    );
  }

  if (project.media === "cthulhu") {
    return (
      <div className="project-card__media art art--cthulhu" aria-hidden="true">
        <span className="art__rings" />
        <span className="art__dice">d100</span>
      </div>
    );
  }

  if (project.media === "agents") {
    return (
      <div className="project-card__media art art--agents" aria-hidden="true">
        <svg viewBox="0 0 380 200">
          {AGENT_EDGES.map(([a, b], i) => (
            <line
              key={i}
              className="art__edge"
              style={{ "--i": i }}
              x1={AGENT_NODES[a][0]}
              y1={AGENT_NODES[a][1]}
              x2={AGENT_NODES[b][0]}
              y2={AGENT_NODES[b][1]}
            />
          ))}
          {AGENT_NODES.map(([x, y], i) => (
            <circle key={i} className={`art__node${i === 6 ? " art__node--hub" : ""}`} cx={x} cy={y} r={i === 6 ? 13 : 8} />
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className="project-card__media art art--site" aria-hidden="true">
      <span className="art__window">
        <span className="art__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="art__heat" />
        <span className="art__lang">
          FR <b>EN</b>
        </span>
        <span className="art__lines">
          <i />
          <i />
        </span>
      </span>
    </div>
  );
}

export default function ProjectCard({ project, wide = false, delay = 0 }) {
  const { t } = useI18n();

  return (
    <Reveal
      as="article"
      id={`projet-${project.id}`}
      className={`card card--interactive card--glow project-card${wide ? " project-card--wide" : ""}`}
      delay={delay}
      aria-labelledby={`project-${project.id}`}
    >
      <ProjectMedia project={project} />
      <div className="project-card__body">
        {(project.context || project.status) && (
          <p className="project-card__context">
            {project.status && <span className="status">{project.status}</span>}
            {project.context}
          </p>
        )}
        <h4 id={`project-${project.id}`} className="project-card__title">
          {project.title}
        </h4>
        <p className="project-card__text">{project.text}</p>
        {project.note && (
          <p className="project-card__note">
            <Icon name="flame" />
            <span>{project.note}</span>
          </p>
        )}
        <div className="project-card__footer">
          <ul className="chip-list" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
          {project.links.map((link) => (
            <a key={link.href} className="text-link" href={HREFS[link.href]} target="_blank" rel="noopener noreferrer">
              {link.label}
              <Icon name="external" />
              <span className="sr-only">{t.ui.newTab}</span>
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
