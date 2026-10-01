import { useI18n } from "../i18n/I18nProvider.jsx";
import { media } from "../content/site.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import "./Education.css";

export default function Education() {
  const { t } = useI18n();
  const e = t.education;

  return (
    <Section id="formation" index={3} kicker={e.kicker} title={e.title} lead={e.lead} alt>
      <Reveal as="article" className="degree" aria-labelledby="degree-title">
        <div className="degree__logo">
          <img src={media.universityLogo} alt={e.degree.logoAlt} width="72" height="72" />
        </div>
        <div className="degree__body">
          <p className="degree__period">{e.degree.period}</p>
          <h3 id="degree-title" className="degree__title">
            {e.degree.title}
          </h3>
          <p className="degree__track">{e.degree.track}</p>
          <p className="degree__school">{e.degree.school}</p>
        </div>
        <p className="degree__text">{e.degree.text}</p>
      </Reveal>

      <h3 className="subheading">{e.coursesTitle}</h3>
      <ul className="courses">
        {e.courses.map((course, i) => (
          <Reveal as="li" key={course.icon} className="card card--interactive card--glow course" delay={i * 70}>
            <span className="icon-badge" aria-hidden="true">
              <Icon name={course.icon} />
            </span>
            <h4 className="course__title">{course.title}</h4>
            <p className="course__text">{course.text}</p>
            <p className="course__impact">
              <strong>{e.impactLabel}</strong> {course.impact}
            </p>
            <p className="course__applied">
              <span>{e.appliedLabel}</span>
              <a href={course.applied.href}>
                {course.applied.label}
                <Icon name="arrow-right" />
              </a>
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
