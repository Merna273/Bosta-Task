import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import "./index.css";
import App from "./App";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next"; // Correct import for I18nextProvider

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en", // default language
  resources: {
    en: { global: global_en },
    ar: { global: global_ar },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      {" "}
      <App />
    </I18nextProvider>
  </BrowserRouter>
);
