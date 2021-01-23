import React from "react";
import { Link } from "react-router-dom";
import { Head } from "../components/Head";
import { useTranslation } from "react-i18next";

const Landing: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div id="landingPage">
			<Head title="Home" />
			<h1 className="textCenter title">{t("title")}</h1>
			<div className="squashedIn">
				<p>
					{t("subtitle")}{" "}
					<a
						href="https://www.tofugu.com/learn-japanese/"
						rel="noreferrer noopener"
						target="_blank"
					>
						{t("tofugu-link")}
					</a>{" "}
					first!
				</p>
			</div>
			<section className="mt-3">
				<p className="textCenter">{t("choose")}</p>
				<div className="flexAllCenter">
					<Link
						to="/hiragana"
						className="btn btn-primary verticalCenterText mr-2"
					>
						Hiragana
					</Link>
					<Link to="/katakana" className="btn btn-primary verticalCenterText">
						Katakana
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Landing;
