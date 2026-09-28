import { useEffect, useRef } from "react";
import { useI18n } from "../i18n/I18nProvider.jsx";
import Icon from "./Icon.jsx";
import "./ImageModal.css";

export default function ImageModal({ image, onClose }) {
  const { t } = useI18n();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!image) return undefined;
    const previous = document.activeElement;
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="image-modal" role="dialog" aria-modal="true" aria-label={t.ui.imageDialog} onClick={onClose}>
      <figure className="image-modal__content" onClick={(event) => event.stopPropagation()}>
        <button ref={closeRef} type="button" className="image-modal__close" onClick={onClose} aria-label={t.ui.close}>
          <Icon name="close" />
        </button>
        <img src={image.src} alt={image.alt} />
        {image.caption && <figcaption>{image.caption}</figcaption>}
      </figure>
    </div>
  );
}
