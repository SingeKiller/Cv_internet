const PATHS = {
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-down": <path d="M12 5v14M6 13l6 6 6-6" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  download: <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M5 4h3.5l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5L15 13.5l5 2V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <path d="M8 10.5V16.5M8 7.6v.01M12 16.5v-3.4a2.4 2.4 0 0 1 4.8 0v3.4M12 10.5v6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  pause: <path d="M9 5v14M15 5v14" />,
  play: <path d="M8 5.5v13l10.5-6.5z" />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h8" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />,
  sigma: <path d="M18 7V4H6l6 8-6 8h12v-3" />,
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
  tools: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 4.9L19 9.5l-5.2 1.6L12 16l-1.8-4.9L5 9.5l5.2-1.6z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
    </>
  ),
  flame: (
    <path d="M12 22c4 0 7-2.8 7-6.8 0-3.4-2.3-5.6-3.6-7.2-.3 1.8-1.2 3-2.4 3.6.3-3.3-1.2-6.4-4-8.6.2 3-1.3 5-2.8 6.9C5 11.2 5 12.7 5 15.2 5 19.2 8 22 12 22z" />
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  refresh: <path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4" />,
  zoom: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4M11 8v6M8 11h6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
    </>
  ),
  graduation: (
    <>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" />
    </>
  ),
  bulb: (
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
  ),
  dice: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3.5" />
      <path d="M9 9h.01M15 9h.01M12 12h.01M9 15h.01M15 15h.01" strokeWidth="2.6" />
    </>
  ),
  bell: (
    <>
      <path d="M3 19h18" />
      <path d="M4 19c3.5 0 4.5-13 8-13s4.5 13 8 13" />
      <path d="M8.5 19v-5M15.5 19v-5" strokeDasharray="1.6 2" />
    </>
  ),
  regression: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M6.5 17.5L19 7" />
      <path d="M8 13h.01M11 15h.01M13 10h.01M16 11h.01M17.5 7.5h.01" strokeWidth="2.6" />
    </>
  ),
  bars: (
    <>
      <path d="M4 20h16" />
      <rect x="5.5" y="12" width="3" height="6" rx="0.8" />
      <rect x="10.5" y="7" width="3" height="11" rx="0.8" />
      <rect x="15.5" y="10" width="3" height="8" rx="0.8" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <circle cx="9" cy="10" r="2" />
      <path d="M21 15.5l-5-5L7 20" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
};

const GITHUB_MARK =
  "M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z";

export default function Icon({ name, className = "", ...rest }) {
  const classes = `icon icon--${name} ${className}`.trim();

  if (name === "github") {
    return (
      <svg viewBox="0 0 16 16" fill="currentColor" className={classes} aria-hidden="true" focusable="false" {...rest}>
        <path d={GITHUB_MARK} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
