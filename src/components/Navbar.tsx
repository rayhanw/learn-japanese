import React from "react";
import { Link } from "react-router-dom";
import { LINKS } from "../constants";
import { useThemeContext } from "../contexts/theme/theme";
import { useGlobalStateContext } from "../contexts/globalState/globalState";

export const Navbar: React.FC = () => {
	const { theme, toggleTheme } = useThemeContext();
	const { dispatch } = useGlobalStateContext();

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
