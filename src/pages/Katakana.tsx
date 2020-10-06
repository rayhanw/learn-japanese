import React from "react";
import { Head } from "../components/Head";

export const Katakana: React.FC = () => {
	return (
		<div id="katakanaPage">
			<Head title="Katakana Quiz" />
			<div className="katakanaContainer">
				<h2>Main Katakana</h2>
			</div>
			<div>
				<h2>Dakuten/Handakuten</h2>
			</div>
			<div>
				<h2>Combination</h2>
			</div>
		</div>
	);
};
