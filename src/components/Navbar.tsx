import React from "react";
import { Link } from "react-router-dom";
import { LINKS } from "../constants";
import { useThemeContext } from "../contexts/theme/theme";
import { useGlobalStateContext } from "../contexts/globalState/globalState";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Navbar: React.FC = () => {
	const { theme, toggleTheme } = useThemeContext();
	const { dispatch } = useGlobalStateContext();
	const { t } = useTranslation();

	return (
		<nav>
			<ul>
				{LINKS.map(({ code, url }, i) => (
					<li key={i}>
						<Link to={url} onClick={() => dispatch({ type: "CLEAR_ALL" })}>
							{t(`navbar.${code}`)}
						</Link>
					</li>
				))}
			</ul>
			<div className="navbar-togglers">
				<LanguageSwitcher />
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
