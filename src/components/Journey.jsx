import { useI18n } from "../i18n/I18nProvider.jsx";
import Section from "./Section.jsx";
import Icon from "./Icon.jsx";
import TimelineItem from "./TimelineItem.jsx";
import "./Journey.css";

export default function Journey() {
  const { t } = useI18n();
  const j = t.journey;

  const columns = [
    { icon: "graduation", title: j.educationTitle, items: j.education },
    { icon: "briefcase", title: j.experienceTitle, items: j.experience },
  ];

  return (
    <Section id="parcours" index={2} kicker={j.kicker} title={j.title} lead={j.lead} alt>
      <div className="journey">
        {columns.map((column) => (
          <div key={column.icon} className="journey__column">
            <h3 className="journey__title">
              <span className="icon-badge" aria-hidden="true">
                <Icon name={column.icon} />
              </span>
              {column.title}
            </h3>
            <ol className="timeline">
              {column.items.map((item, i) => (
                <TimelineItem key={item.title} item={item} highlightTag={j.highlightTag} delay={i * 60} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
