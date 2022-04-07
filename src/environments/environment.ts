// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import { EmailTemplateType } from "src/app/_enums/emailTemplateType";
import { Language } from "src/app/_enums/language";

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000',
  supportedLanguage: [
    { code: Language.Germany, name: "Germany", iconCode: "de"},
    { code: Language.Englisch, name: "English", iconCode: "gb"}
  ],
  emailTemplatePlaceholder: [
    { type: EmailTemplateType.Register, props: ['Firstname', 'Lastname', 'UserName', 'RegisterConfirm', 'Date'] },
    { type: EmailTemplateType.PasswortReset, props: ['Date'] }
  ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
