import React from "react";
import { HIRAGANA_MAPPING } from "../constants";
import { Checkbox } from "../components/Checkbox";

export const Hiragana: React.FC = () => {
	return (
		<div id="hiraganaPage">
			<div className="hiraganaContainer">
				<h2>Main Hiragana</h2>
				<div className="cardsContainer">
					{Object.keys(HIRAGANA_MAPPING.main.vowels).map((key, i) => (
						<Checkbox text={key} />
					))}
				</div>
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
