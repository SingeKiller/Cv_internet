import { useI18n } from "../i18n/I18nProvider.jsx";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import "./Profile.css";

export default function Profile() {
  const { t } = useI18n();
  const p = t.profile;

  return (
    <Section id="profil" index={1} kicker={p.kicker} title={p.title}>
      <div className="profile">
        <Reveal className="profile__story">
          {p.paragraphs.map((text, i) => (
            <p key={i} className={i === 0 ? "profile__lead" : undefined}>
              {text}
            </p>
          ))}
        </Reveal>

        <Reveal as="aside" className="card facts" delay={120} aria-labelledby="facts-title">
          <h3 id="facts-title" className="card-label">
            {p.factsTitle}
          </h3>
          <dl className="facts__list">
            {p.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="card-label facts__seeking">
            <Icon name="target" />
            {p.seekingTitle}
          </h3>
          <ul className="chip-list">
            {p.seeking.map((item) => (
              <li key={item} className="chip chip--accent">
                {item}
              </li>
            ))}
          </ul>
          <p className="facts__sectors">
            <span>{p.sectorsLabel}</span>
            {p.sectors}
          </p>
        </Reveal>
      </div>

      <h3 className="subheading">{p.valuesTitle}</h3>
      <ul className="values">
        {p.values.map((value, i) => (
          <Reveal as="li" key={value.icon} className="card card--interactive card--glow value" delay={i * 100}>
            <span className="icon-badge" aria-hidden="true">
              <Icon name={value.icon} />
            </span>
            <h4>{value.title}</h4>
            <p>{value.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
