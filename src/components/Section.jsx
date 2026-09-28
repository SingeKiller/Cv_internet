import Reveal from "./Reveal.jsx";

export default function Section({ id, index, kicker, title, lead, alt = false, children }) {
  return (
    <section id={id} className={`section${alt ? " section--alt" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section__head">
          <p className="section__kicker">
            <span className="section__index">{String(index).padStart(2, "0")}</span>
            {kicker}
          </p>
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
          {lead && <p className="section__lead">{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
