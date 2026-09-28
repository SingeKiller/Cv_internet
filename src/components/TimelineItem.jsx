import Reveal from "./Reveal.jsx";

export default function TimelineItem({ item, highlightTag, delay = 0 }) {
  return (
    <Reveal as="li" className={`timeline-item${item.highlight ? " timeline-item--highlight" : ""}`} delay={delay}>
      <p className="timeline-item__period">
        {item.period}
        {item.highlight && <span className="tag">{highlightTag}</span>}
      </p>
      <h4 className="timeline-item__title">{item.title}</h4>
      {item.org && <p className="timeline-item__org">{item.org}</p>}
      {item.details && (
        <ul className="timeline-item__details">
          {item.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}
