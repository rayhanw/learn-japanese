import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "../translations/en.json";
import indonesian from "../translations/id.json";

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			en: english,
			id: indonesian
		},
		lng: "en",
		fallbackLng: "en",

		interpolation: {
			escapeValue: false
		}
	});

export { i18n };
