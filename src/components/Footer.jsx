import { useI18n } from "../i18n/I18nProvider.jsx";
import { site } from "../content/site.js";
import Icon from "./Icon.jsx";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {new Date().getFullYear()} {site.name} · {t.footer.rights}
        </p>
        <div className="site-footer__links">
          <a href={site.linkedin.url} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" />
            LinkedIn
          </a>
          <a href={site.repoUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="github" />
            {t.footer.source}
          </a>
          <a href="#top">
            {t.footer.top}
            <Icon name="arrow-down" className="icon--flip" />
          </a>
        </div>
      </div>
    </footer>
  );
}
