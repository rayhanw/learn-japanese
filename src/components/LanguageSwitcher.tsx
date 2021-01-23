import React from "react";
import { Language } from "../contexts/globalState/types";
import { i18n } from "../utilities";
import { LANGUAGES } from "../constants/others";

export const LanguageSwitcher: React.FC = () => {
	const handleLanguageChange = (code: Language): void => {
		i18n.changeLanguage(code);
	};

	return (
		<div className="language-switcher">
			{LANGUAGES.map(({ code, text }, i) => (
				<button
					className="btn btn-primary"
					onClick={() => handleLanguageChange(code)}
					key={i}
				>
					{text}
				</button>
			))}
		</div>
	);
};
