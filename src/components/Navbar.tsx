import React from "react";
import { LINKS } from "../constants";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
	return (
		<nav>
			<ul>
				{LINKS.map(({ text, url }, i) => (
					<li key={i}>
						<Link to={url}>{text}</Link>
					</li>
				))}
			</ul>
      <p className="noMargin">See an issue? Report <Link to="//github.com/rayhanw/learn-japanese/issues/new" target="_blank" rel="noreferrer noopener">here</Link></p>
		</nav>
	);
};
