import React, { useState } from "react";
import { Head } from "../components/Head";
import { useGlobalStateContext } from "../contexts/globalState/globalState";
import { KATAKANA_MAPPING } from "../constants";
import { Checkbox } from "../components/Checkbox";
import { CheckboxCollection } from "../components/CheckboxCollection";
import { Link } from "react-router-dom";
import { CheckboxGroup } from "../components/CheckboxGroup";

const Katakana: React.FC = () => {
	const { dispatch } = useGlobalStateContext();
	const [allKatakanaActive, setAllKatakanaActive] = useState(false);
	const [mainKatakanaActive, setMainKatakanaActive] = useState(false);
	const [dakutenKatakanaActive, setDakutenKatakanaActive] = useState(false);
	const [combinationKatakanaActive, setCombinationKatakanaActive] = useState(
		false
	);
	const { main, dakuten, dakutenCombination } = KATAKANA_MAPPING;
	const payload: { type: "katakana" } = { type: "katakana" };

	const handleAllKatakanaChange = () => {
		if (allKatakanaActive) {
			dispatch({ type: "REMOVE_ALL", payload });
		} else {
			dispatch({ type: "ADD_ALL", payload });
		}
		setAllKatakanaActive(prevState => !prevState);
	};
	const handleMainKatakanaChange = () => {
		if (mainKatakanaActive) {
			dispatch({ type: "REMOVE_MAIN", payload });
		} else {
			dispatch({ type: "ADD_MAIN", payload });
		}
		setMainKatakanaActive(prevState => !prevState);
	};
	const handleDakutenKatakanaChange = () => {
		if (dakutenKatakanaActive) {
			dispatch({ type: "REMOVE_DAKUTEN", payload });
		} else {
			dispatch({ type: "ADD_DAKUTEN", payload });
		}
		setDakutenKatakanaActive(prevState => !prevState);
	};
	const handleCombinationKatakanaChange = () => {
		if (combinationKatakanaActive) {
			dispatch({ type: "REMOVE_COMBINATION", payload });
		} else {
			dispatch({ type: "ADD_COMBINATION", payload });
		}
		setCombinationKatakanaActive(prevState => !prevState);
	};

	return (
		<div id="hiraganaPage">
			<Head title="Katakana Quiz" />
			<div className="mb-3">
				<h1 className="textCenter title">Katakana Quiz</h1>
			</div>
			<Checkbox
				text="All Katakana"
				alphabet=""
				classList={`${allKatakanaActive ? "checked" : ""}`}
				handleMultipleChange={handleAllKatakanaChange}
			/>
			<div className="pageGrid">
				<CheckboxGroup
					title="Main Hiragana"
					subtitle="All Main Katakana"
					data={main}
					shouldActivate={mainKatakanaActive || allKatakanaActive}
					handleMultipleChange={handleMainKatakanaChange}
				/>
				<CheckboxGroup
					title="Dakuten/Handakuten"
					subtitle="All Dakuten Katakana"
					data={dakuten}
					shouldActivate={dakutenKatakanaActive || allKatakanaActive}
					handleMultipleChange={handleDakutenKatakanaChange}
					columnCount="oneColumn"
					classList={`mb-2 ${dakutenKatakanaActive ? "checked" : ""}`}
				/>
				<CheckboxGroup
					title="Combination"
					subtitle="All Combination Katakana"
					data={dakutenCombination}
					shouldActivate={combinationKatakanaActive || allKatakanaActive}
					handleMultipleChange={handleCombinationKatakanaChange}
				/>
			</div>
			<div className="relativeCenter">
				<Link to="/quiz/katakana" className="btn btn-primary btn-lg">
					Start Quiz!
				</Link>
			</div>
		</div>
	);
};

export default Katakana;
