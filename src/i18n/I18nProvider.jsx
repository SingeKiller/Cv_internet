import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import fr from "../content/fr.js";
import en from "../content/en.js";

export const LANGUAGES = ["fr", "en"];
const STORAGE_KEY = "lang";

function typesetFrench(value) {
  if (typeof value === "string") {
    return value.replace(/ ([:;!?%»])/g, " $1").replace(/« /g, "« ");
  }
  if (Array.isArray(value)) return value.map(typesetFrench);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, v]) => [key, typesetFrench(v)]));
  }
  return value;
}

const DICTIONARIES = { fr: typesetFrench(fr), en };

function detectInitialLang() {
  const fromDocument = document.documentElement.lang;
  if (LANGUAGES.includes(fromDocument)) return fromDocument;

  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (LANGUAGES.includes(fromUrl)) return fromUrl;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(stored)) return stored;
  } catch {
  }

  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language || "fr"];
  for (const tag of preferred) {
    const code = String(tag).slice(0, 2).toLowerCase();
    if (LANGUAGES.includes(code)) return code;
  }
  return "en";
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
    }
  }, []);

  const t = DICTIONARIES[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);

    try {
      const url = new URL(window.location.href);
      if (lang === "fr") url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      window.history.replaceState(window.history.state, "", url);
    } catch {
    }
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n doit être utilisé dans <I18nProvider>");
  return context;
}
