import React from "react";
import { LINKS } from "../constants";
import { Link } from "react-router-dom";
import { useThemeContext } from "../contexts/theme/theme";

export const Navbar: React.FC = () => {
	const { theme, toggleTheme } = useThemeContext();

	return (
		<nav>
			<ul>
				{LINKS.map(({ text, url }, i) => (
					<li key={i}>
						<Link to={url}>{text}</Link>
					</li>
				))}
			</ul>
			<label className="switch">
				<input
					type="checkbox"
					checked={theme === "dark"}
					onChange={toggleTheme}
				/>
				<span className="slider round"></span>
			</label>
		</nav>
	);
};
