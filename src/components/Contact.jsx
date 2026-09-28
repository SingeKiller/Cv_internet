import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nProvider.jsx";
import { site } from "../content/site.js";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import "./Contact.css";

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2400);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  const channels = [
    { icon: "mail", label: c.channels.email, value: site.email, href: `mailto:${site.email}` },
    { icon: "phone", label: c.channels.phone, value: site.phone.display, href: site.phone.href },
    { icon: "linkedin", label: c.channels.linkedin, value: site.linkedin.label, href: site.linkedin.url, external: true },
    { icon: "github", label: c.channels.github, value: site.github.label, href: site.github.url, external: true },
    { icon: "pin", label: c.channels.location, value: site.location },
  ];

  return (
    <section id="contact" className="section section--contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact-card scope-dark">
          <div className="contact__main">
            <p className="section__kicker">
              <span className="section__index">06</span>
              {c.kicker}
            </p>
            <h2 id="contact-title" className="contact__title">
              {c.title}
            </h2>
            <p className="contact__text">{c.text}</p>
            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${site.email}`}>
                <Icon name="mail" />
                {c.emailCta}
              </a>
              <button type="button" className="btn btn--ghost" onClick={copyEmail}>
                <Icon name={copied ? "check" : "copy"} />
                {copied ? c.copied : c.copyEmail}
              </button>
              <a className="btn btn--ghost" href={site.cvUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="download" />
                {c.cvCta}
              </a>
            </div>
            <p className="sr-only" aria-live="polite">
              {copied ? c.copied : ""}
            </p>
          </div>

          <div className="contact__side">
            <ul className="channels">
              {channels.map((channel) => {
                const content = (
                  <>
                    <span className="channel__icon" aria-hidden="true">
                      <Icon name={channel.icon} />
                    </span>
                    <span className="channel__text">
                      <span className="channel__label">{channel.label}</span>
                      <span className="channel__value">{channel.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={channel.icon}>
                    {channel.href ? (
                      <a
                        className="channel"
                        href={channel.href}
                        {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="channel channel--static">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="references">
              <h3 className="card-label">{c.referencesTitle}</h3>
              <ul>
                {site.references.map((reference, i) => (
                  <li key={reference.email} className="reference">
                    <span className="reference__name">{reference.name}</span>
                    <span className="reference__role">{c.references[i]}</span>
                    <a className="reference__email" href={`mailto:${reference.email}`}>
                      {reference.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
