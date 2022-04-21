import { Language } from "src/app/_enums/language";

export const environment = {
  production: true,
  apiUrl: 'http://localhost:5000',
  clientUrl: window.location.origin,
    /**
   * Supported application language.
   */
     supportedLanguage: [
      { code: Language.Germany, name: "Germany", iconCode: "de"},
      { code: Language.Englisch, name: "English", iconCode: "gb"}
    ],
};
