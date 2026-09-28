import { useI18n } from "../i18n/I18nProvider.jsx";
import Icon from "./Icon.jsx";

export default function Figure({ src, alt, caption, onZoom, className = "" }) {
  const { t } = useI18n();

  return (
    <figure className={`figure ${className}`.trim()}>
      <button
        type="button"
        className="figure__zoom"
        onClick={() => onZoom({ src, alt, caption })}
        aria-label={`${t.ui.zoomImage} — ${alt}`}
      >
        <img src={src} alt="" loading="lazy" decoding="async" />
        <span className="figure__zoom-icon" aria-hidden="true">
          <Icon name="zoom" />
        </span>
      </button>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
