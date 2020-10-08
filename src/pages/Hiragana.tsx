import React, { useState } from "react";
import { Checkbox } from "../components/Checkbox";
import { CheckboxCollection } from "../components/CheckboxCollection";
import { HIRAGANA_MAPPING } from "../constants";
import { useGlobalStateContext } from "../contexts/globalState";
import { Link } from "react-router-dom";
import { Head } from "../components/Head";

export const Hiragana: React.FC = () => {
	const { dispatch } = useGlobalStateContext();
	const [allHiraganaActive, setAllHiraganaActive] = useState(false);
	const [mainHiraganaActive, setMainHiraganaActive] = useState(false);
	const [dakutenHiraganaActive, setDakutenHiraganaActive] = useState(false);
	const [combinationHiraganaActive, setCombinationHiraganaActive] = useState(
		false
	);
	const { main, dakuten, dakutenCombination } = HIRAGANA_MAPPING;
	const payload: { type: "hiragana" } = { type: "hiragana" };

	const handleAllHiraganaChange = () => {
		if (allHiraganaActive) {
			dispatch({ type: "REMOVE_ALL", payload });
		} else {
			dispatch({ type: "ADD_ALL", payload });
		}
		setAllHiraganaActive(prevState => !prevState);
	};
	const handleMainHiraganaChange = () => {
		if (mainHiraganaActive) {
			dispatch({ type: "REMOVE_MAIN", payload });
		} else {
			dispatch({ type: "ADD_MAIN", payload });
		}
		setMainHiraganaActive(prevState => !prevState);
	};
	const handleDakutenHiraganaChange = () => {
		if (dakutenHiraganaActive) {
			dispatch({ type: "REMOVE_DAKUTEN", payload });
		} else {
			dispatch({ type: "ADD_DAKUTEN", payload });
		}
		setDakutenHiraganaActive(prevState => !prevState);
	};
	const handleCombinationHiraganaChange = () => {
		if (combinationHiraganaActive) {
			dispatch({ type: "REMOVE_COMBINATION", payload });
		} else {
			dispatch({ type: "ADD_COMBINATION", payload });
		}
		setCombinationHiraganaActive(prevState => !prevState);
	};

	return (
		<div id="hiraganaPage">
			<Head title="Hiragana Quiz" />
			<div className="mb-3">
				<h1 className="textCenter blueText mb-3">
					Hiragana Quiz
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
			</div>
			<Checkbox
				text="All Hiragana"
				hiragana=""
				classList={`${allHiraganaActive ? "checked" : ""}`}
				handleMultipleChange={handleAllHiraganaChange}
			/>
			<div className="pageGrid">
				<div>
					<h2 className="title">Main Hiragana</h2>
					<CheckboxCollection
						data={main}
						shouldActivate={mainHiraganaActive || allHiraganaActive}
					>
						<Checkbox
							text="All Main Hiragana"
							hiragana=""
							classList="mb-2"
							handleMultipleChange={handleMainHiraganaChange}
							checked={mainHiraganaActive || allHiraganaActive}
						/>
					</CheckboxCollection>
				</div>
				<div>
					<h2 className="title">Dakuten/Handakuten</h2>
					<CheckboxCollection
						data={dakuten}
						columnCount="oneColumn"
						shouldActivate={dakutenHiraganaActive || allHiraganaActive}
					>
						<Checkbox
							text="All Dakuten Hiragana"
							hiragana=""
							classList={`mb-2 ${dakutenHiraganaActive ? "checked" : ""}`}
							handleMultipleChange={handleDakutenHiraganaChange}
							checked={dakutenHiraganaActive || allHiraganaActive}
						/>
					</CheckboxCollection>
				</div>
				<div>
					<h2 className="title">Combination</h2>
					<CheckboxCollection
						data={dakutenCombination}
						shouldActivate={combinationHiraganaActive || allHiraganaActive}
					>
						<Checkbox
							text="All Combination Hiragana"
							hiragana=""
							classList={`mb-2 ${combinationHiraganaActive ? "checked" : ""}`}
							handleMultipleChange={handleCombinationHiraganaChange}
							checked={combinationHiraganaActive || allHiraganaActive}
						/>
					</CheckboxCollection>
				</div>
			</div>
			<div className="relativeCenter">
				<Link to="/quiz/hiragana" className="btn btn-primary btn-lg">
					Start Quiz!
				</Link>
			</div>
		</div>
	);
};
