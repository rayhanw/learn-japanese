import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
	const { t } = useTranslation();

	return (
		<footer>
			<p className="noMargin">
				{t("footer.issue")}{" "}
				<Link
					to="//github.com/rayhanw/learn-japanese/issues/new/choose"
					target="_blank"
					rel="noreferrer noopener"
				>
					{t("footer.here")}
				</Link>
			</p>
		</footer>
	);
};
