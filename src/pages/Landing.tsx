import React from "react";
import { Link } from "react-router-dom";
import { Head } from "../components/Head";

export const Landing: React.FC = () => {
	return (
		<div id="landingPage">
			<Head title="Home" />
			<h1 className="textCenter blueText">
				Clone of Tofugu's Learn Hiragana Quiz (+ Katakana)
			</h1>
			<div className="squashedIn">
				<p>
					If you haven't heard about Tofugu and want to learn Japanese, please
					take your time and read{" "}
					<a
						href="https://www.tofugu.com/learn-japanese/"
						rel="noreferrer noopener"
						target="_blank"
					>
						this article by Tofugu
					</a>{" "}
					first!
				</p>
			</div>
			<section className="mt-3">
				<p className="textCenter">Please choose one!</p>
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
