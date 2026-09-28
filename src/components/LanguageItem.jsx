const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function CefrScale() {
  return (
    <div className="cefr cefr--scale" aria-hidden="true">
      {CEFR_LEVELS.map((level) => (
        <span key={level}>{level}</span>
      ))}
    </div>
  );
}

export default function LanguageItem({ lang, scaleLabel }) {
  return (
    <li className="language">
      <div className="language__head">
        <span className="language__name">{lang.name}</span>
        <span className="language__level">{lang.level}</span>
      </div>
      <div className="cefr" role="img" aria-label={`${scaleLabel} ${lang.level}`}>
        {CEFR_LEVELS.map((level, i) => (
          <span key={level} className={i < lang.rank ? "is-on" : undefined} style={{ "--i": i }} />
        ))}
      </div>
    </li>
  );
}
