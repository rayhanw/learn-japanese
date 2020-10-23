import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
	return (
		<footer>
			<p className="noMargin">
				See an issue? Report{" "}
				<Link
					to="//github.com/rayhanw/learn-japanese/issues/new"
					target="_blank"
					rel="noreferrer noopener"
				>
					here
				</Link>
			</p>
		</footer>
	);
};
