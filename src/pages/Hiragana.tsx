import React, { useState } from "react";
import { HIRAGANA_MAPPING } from "../constants";
import { CheckboxCollection } from "../components/CheckboxCollection";
import { Checkbox } from "../components/Checkbox";
import { useGlobalStateContext } from "../contexts/globalState";

export const Hiragana: React.FC = () => {
	const { dispatch } = useGlobalStateContext();
	const [allHiraganaActive, setAllHiraganaActive] = useState(false);
	const [mainHiraganaActive, setMainHiraganaActive] = useState(false);
	const [dakutenHiraganaActive, setDakutenHiraganaActive] = useState(false);
	const [combinationHiraganaActive, setCombinationHiraganaActive] = useState(
		false
	);
	const { main, dakuten, dakutenCombination } = HIRAGANA_MAPPING;

	const handleAllHiraganaChange = () => {
		if (allHiraganaActive) {
			dispatch({ type: "REMOVE_ALL_HIRAGANA" });
		} else {
			dispatch({ type: "ADD_ALL_HIRAGANA" });
		}
		setAllHiraganaActive(prevState => !prevState);
	};
	const handleMainHiraganaChange = () => {
		if (mainHiraganaActive) {
			dispatch({ type: "REMOVE_MAIN_HIRAGANA" });
		} else {
			dispatch({ type: "ADD_MAIN_HIRAGANA" });
		}
		setMainHiraganaActive(prevState => !prevState);
	};
	const handleDakutenHiraganaChange = () => {
		if (dakutenHiraganaActive) {
			dispatch({ type: "REMOVE_DAKUTEN_HIRAGANA" });
		} else {
			dispatch({ type: "ADD_DAKUTEN_HIRAGANA" });
		}
		setDakutenHiraganaActive(prevState => !prevState);
	};
	const handleCombinationHiraganaChange = () => {
		if (combinationHiraganaActive) {
			dispatch({ type: "REMOVE_COMBINATION_HIRAGANA" });
		} else {
			dispatch({ type: "ADD_COMBINATION_HIRAGANA" });
		}
		setCombinationHiraganaActive(prevState => !prevState);
	};

	return (
		<div id="hiraganaPage">
			<Checkbox
				text="All Hiragana"
				hiragana=""
				classList={`mb-3 ${allHiraganaActive ? "checked" : ""}`}
				handleMultipleChange={handleAllHiraganaChange}
			/>
			<div className="pageGrid">
				<div>
					<h2 className="title">Main Hiragana</h2>
					<CheckboxCollection data={main}>
						<Checkbox
							text="All Main Hiragana"
							hiragana=""
							classList={`mb-2 ${mainHiraganaActive ? "checked" : ""}`}
							handleMultipleChange={handleMainHiraganaChange}
						/>
					</CheckboxCollection>
				</div>
				<div>
					<h2 className="title">Dakuten/Handakuten</h2>
					<CheckboxCollection data={dakuten} columnCount="oneColumn">
						<Checkbox
							text="All Dakuten Hiragana"
							hiragana=""
							classList={`mb-2 ${dakutenHiraganaActive ? "checked" : ""}`}
							handleMultipleChange={handleDakutenHiraganaChange}
						/>
					</CheckboxCollection>
				</div>
				<div>
					<h2 className="title">Combination</h2>
					<CheckboxCollection data={dakutenCombination}>
						<Checkbox
							text="All Combination Hiragana"
							hiragana=""
							classList={`mb-2 ${combinationHiraganaActive ? "checked" : ""}`}
							handleMultipleChange={handleCombinationHiraganaChange}
						/>
					</CheckboxCollection>
				</div>
			</div>
		</div>
	);
};
