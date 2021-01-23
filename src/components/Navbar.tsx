import React from "react";
import { Link } from "react-router-dom";
import { LINKS } from "../constants";
import { useThemeContext } from "../contexts/theme/theme";
import { useGlobalStateContext } from "../contexts/globalState/globalState";
import { Language } from "../contexts/globalState/types";
import { i18n } from "../utilities";

const LANGUAGES: { code: Language; text: string }[] = [
	{
		code: "en",
		text: "English"
	},
	{
		code: "id",
		text: "Bahasa Indonesia"
	}
];

export const Navbar: React.FC = () => {
	const { theme, toggleTheme } = useThemeContext();
	const { dispatch } = useGlobalStateContext();

	const handleLanguageChange = (code: Language): void => {
		i18n.changeLanguage(code);
	};

	return (
		<nav>
			<ul>
				{LINKS.map(({ text, url }, i) => (
					<li key={i}>
						<Link to={url} onClick={() => dispatch({ type: "CLEAR_ALL" })}>
							{text}
						</Link>
					</li>
				))}
			</ul>
			<div>
				{LANGUAGES.map(({ code, text }, i) => (
					<button onClick={() => handleLanguageChange(code)} key={i}>
						{text}
					</button>
				))}
				<label htmlFor={`${theme}-input`} className="switch">
					<input
						id={`${theme}-input`}
						type="checkbox"
						checked={theme === "dark"}
						onChange={toggleTheme}
					/>
					<span className="slider round"></span>
				</label>
			</div>
		</nav>
	);
};
