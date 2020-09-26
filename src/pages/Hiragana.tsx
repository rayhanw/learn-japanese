import React from "react";
import { HIRAGANA_MAPPING } from "../constants";
import { CheckboxCollection } from "../components/CheckboxCollection";
import { Checkbox } from "../components/Checkbox";

export const Hiragana: React.FC = () => {
	const { main, dakuten, dakutenCombination } = HIRAGANA_MAPPING;

	return (
		<div id="hiraganaPage">
			<div className="pageGrid">
				<div>
					<h2 className="title">Main Hiragana</h2>
					<CheckboxCollection data={main}>
						<Checkbox text="All Main Hiragana" hiragana="" classList="mb-2" />
					</CheckboxCollection>
				</div>
				<div>
					<h2 className="title">Dakuten/Handakuten</h2>
					<CheckboxCollection data={dakuten} columnCount="oneColumn">
						<Checkbox
							text="All Dakuten Hiragana"
							hiragana=""
							classList="mb-2"
						/>
					</CheckboxCollection>
				</div>
				<div>
					<h2 className="title">Combination</h2>
					<CheckboxCollection data={dakutenCombination}>
						<Checkbox
							text="All Combination Hiragana"
							hiragana=""
							classList="mb-2"
						/>
					</CheckboxCollection>
				</div>
			</div>
		</div>
	);
};
