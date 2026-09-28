import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { I18nProvider } from "./i18n/I18nProvider.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
