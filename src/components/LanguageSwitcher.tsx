import React from "react";
import { Language } from "../contexts/globalState/types";
import { i18n } from "../utilities";
import { LANGUAGES } from "../constants/others";

export const LanguageSwitcher: React.FC = () => {
	const handleLanguageChange = (code: Language): void => {
		i18n.changeLanguage(code);
	};

	const activeLanguage = (code: Language) =>
		i18n.language === code ? "chosen" : "inactive";

	return (
		<div className="language-switcher">
			{LANGUAGES.map(({ code, text }, i) => (
				<button
					className={`btn ${activeLanguage(code)}`}
					onClick={() => handleLanguageChange(code)}
					key={i}
				>
					{text}
				</button>
			))}
		</div>
	);
};
