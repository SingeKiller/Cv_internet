import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

function readStoredTheme() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const fromDocument = document.documentElement.dataset.theme;
    if (fromDocument === "light" || fromDocument === "dark") return fromDocument;
    return window.matchMedia?.(DARK_QUERY).matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia?.(DARK_QUERY);
    if (!media) return undefined;
    const onChange = () => {
      if (!readStoredTheme()) setTheme(media.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
    }
  }, [theme]);

  return { theme, toggleTheme };
}
