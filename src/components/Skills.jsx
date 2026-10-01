import { useI18n } from "../i18n/I18nProvider.jsx";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import LanguageItem, { CefrScale } from "./LanguageItem.jsx";
import "./Skills.css";

export default function Skills() {
  const { t } = useI18n();
  const s = t.skills;

  return (
    <Section id="competences" index={4} kicker={s.kicker} title={s.title} lead={s.lead}>
      <div className="skills-grid">
        {s.groups.map((group, i) => (
          <Reveal key={group.icon} className="card card--interactive card--glow skill-group" delay={i * 80}>
            <div className="skill-group__head">
              <span className="icon-badge" aria-hidden="true">
                <Icon name={group.icon} />
              </span>
              <h3>{group.title}</h3>
            </div>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="skills-bottom">
        <Reveal className="card">
          <h3 className="card-label">{s.softTitle}</h3>
          <ul className="chip-list chip-list--large">
            {s.soft.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="card" delay={80}>
          <h3 className="card-label">{s.languagesTitle}</h3>
          <div className="languages">
            <CefrScale />
            <ul className="languages__list">
              {s.languages.map((lang) => (
                <LanguageItem key={lang.rank} lang={lang} scaleLabel={s.cefrLabel} />
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
