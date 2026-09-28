import { useEffect, useState } from "react";
import { LANGUAGES, useI18n } from "../i18n/I18nProvider.jsx";
import { useScrolled } from "../hooks/useScrolled.js";
import { useScrollSpy } from "../hooks/useScrollSpy.js";
import { useTheme } from "../hooks/useTheme.js";
import { site } from "../content/site.js";
import Icon from "./Icon.jsx";
import "./Header.css";

const SECTIONS = [
  { id: "profil", key: "profile" },
  { id: "formation", key: "education" },
  { id: "projets", key: "projects" },
  { id: "parcours", key: "journey" },
  { id: "competences", key: "skills" },
  { id: "contact", key: "contact" },
];
const SECTION_IDS = SECTIONS.map((section) => section.id);

const LANGUAGE_NAMES = { fr: "Français (FR)", en: "English (EN)" };

function LanguageSwitch() {
  const { t, lang, setLang } = useI18n();
  return (
    <div className="lang-switch" role="group" aria-label={t.ui.langLabel}>
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={lang === code}
          aria-label={LANGUAGE_NAMES[code]}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
      <span className="lang-switch__thumb" data-lang={lang} aria-hidden="true" />
    </div>
  );
}

function ThemeToggle() {
  const { t } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggleTheme}
      aria-label={isDark ? t.ui.themeToLight : t.ui.themeToDark}
      title={isDark ? t.ui.themeToLight : t.ui.themeToDark}
    >
      <Icon name={isDark ? "sun" : "moon"} />
    </button>
  );
}

export default function Header() {
  const { t } = useI18n();
  const scrolled = useScrolled(24);
  const active = useScrollSpy(SECTION_IDS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className={`site-header${solid ? " is-solid" : " scope-dark"}${open ? " is-open" : ""}`}>
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label={`${site.name}, ${t.ui.backToTop}`}>
          <span className="brand__mark" aria-hidden="true">
            OR
          </span>
          <span className="brand__name">{site.name}</span>
        </a>

        <nav id="site-nav" className="site-nav" aria-label={t.ui.navLabel}>
          <ul>
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active === section.id ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {t.ui.nav[section.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <LanguageSwitch />
          <ThemeToggle />
          <a
            className="btn btn--primary btn--small header-cv"
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.ui.cvDownload}
          >
            <Icon name="download" />
            {t.ui.cvShort}
          </a>
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? t.ui.menuClose : t.ui.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
