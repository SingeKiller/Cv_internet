import { useI18n } from "../i18n/I18nProvider.jsx";
import Section from "./Section.jsx";
import ClimateProject from "./ClimateProject.jsx";
import FeaturedProject from "./FeaturedProject.jsx";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

export default function Projects({ onZoom }) {
  const { t } = useI18n();
  const p = t.projects;

  return (
    <Section id="projets" index={3} kicker={p.kicker} title={p.title} lead={p.lead}>
      <div className="projects__main">
        <ClimateProject onZoom={onZoom} />
        <FeaturedProject onZoom={onZoom} />
      </div>

      <h3 className="subheading">{p.othersTitle}</h3>
      <div className="projects-grid">
        {p.others.map((project, i) => (
          <ProjectCard key={project.id} project={project} wide={i === 0} delay={i === 0 ? 0 : (i - 1) * 90} />
        ))}
      </div>
    </Section>
  );
}
