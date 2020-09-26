import React from "react";
import { HIRAGANA_MAPPING } from "../constants";
import { Checkbox } from "../components/Checkbox";

export const Hiragana: React.FC = () => {
	const { main, dakuten, dakutenCombination } = HIRAGANA_MAPPING;

	return (
		<div id="hiraganaPage">
			<div className="pageGrid">
				<div>
					<h2 className="title">Main Hiragana</h2>
					<div className="cardsGrid">
						{Object.keys(main).map((key, i) => (
							<Checkbox key={i} text={key} hiragana={(main as any)[key][key]} />
						))}
					</div>
				</div>
				<div>
					<h2 className="title">Dakuten/Handakuten</h2>
					<div className="cardsGrid oneColumn">
						{Object.keys(dakuten).map((key, i) => (
							<Checkbox
								key={i}
								text={key}
								hiragana={(dakuten as any)[key][key]}
							/>
						))}
					</div>
				</div>
				<div>
					<h2 className="title">Combination</h2>
					<div className="cardsGrid">
						{Object.keys(dakutenCombination).map((key, i) => (
							<Checkbox
								key={i}
								text={key}
								hiragana={(dakutenCombination as any)[key][key]}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
