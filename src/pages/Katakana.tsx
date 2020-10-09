import React, { useState } from "react";
import { Head } from "../components/Head";
import { useGlobalStateContext } from "../contexts/globalState";
import { KATAKANA_MAPPING } from "../constants";
import { Checkbox } from "../components/Checkbox";
import { CheckboxCollection } from "../components/CheckboxCollection";
import { Link } from "react-router-dom";

export const Katakana: React.FC = () => {
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
				<h1 className="textCenter blueText">
					Katakana Quiz
				</h1>
			</div>
			<Checkbox
				text="All Katakana"
				hiragana=""
				classList={`${allKatakanaActive ? "checked" : ""}`}
				handleMultipleChange={handleAllKatakanaChange}
			/>
			<div className="pageGrid">
				<div>
					<h2 className="title">Main Katakana</h2>
					<CheckboxCollection
						data={main}
						shouldActivate={mainKatakanaActive || allKatakanaActive}
					>
						<Checkbox
							text="All Main Katakana"
							hiragana=""
							classList="mb-2"
							handleMultipleChange={handleMainKatakanaChange}
							checked={mainKatakanaActive || allKatakanaActive}
						/>
					</CheckboxCollection>
				</div>
				<div>
					<h2 className="title">Dakuten/Handakuten</h2>
					<CheckboxCollection
						data={dakuten}
						columnCount="oneColumn"
						shouldActivate={dakutenKatakanaActive || allKatakanaActive}
					>
						<Checkbox
							text="All Dakuten Katakana"
							hiragana=""
							classList={`mb-2 ${dakutenKatakanaActive ? "checked" : ""}`}
							handleMultipleChange={handleDakutenKatakanaChange}
							checked={dakutenKatakanaActive || allKatakanaActive}
						/>
					</CheckboxCollection>
				</div>
				<div>
					<h2 className="title">Combination</h2>
					<CheckboxCollection
						data={dakutenCombination}
						shouldActivate={combinationKatakanaActive || allKatakanaActive}
					>
						<Checkbox
							text="All Combination Katakana"
							hiragana=""
							classList={`mb-2 ${combinationKatakanaActive ? "checked" : ""}`}
							handleMultipleChange={handleCombinationKatakanaChange}
							checked={combinationKatakanaActive || allKatakanaActive}
						/>
					</CheckboxCollection>
				</div>
			</div>
			<div className="relativeCenter">
				<Link to="/quiz/katakana" className="btn btn-primary btn-lg">
					Start Quiz!
				</Link>
			</div>
		</div>
	);
};
