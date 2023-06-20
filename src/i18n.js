import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // backend: {
    //   // loadPath: "../public/assets/i18n/{{lng}}.json",
    //   loadPath: "./translate/{{lng}}.json",
    // },
    fallBackLng: "en",
    debug: true,
    // ns: "common",
    interpolation: {
      spaceValue: false,
    },
  });

export default i18n;
