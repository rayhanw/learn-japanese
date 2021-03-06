import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "../components/Checkbox";
import { CheckboxGroup } from "../components/CheckboxGroup";
import { Head } from "../components/Head";
import { HIRAGANA_MAPPING } from "../constants";
import { useGlobalStateContext } from "../contexts/globalState/globalState";
import { useTranslation } from "react-i18next";

const Hiragana: React.FC = () => {
	const { dispatch } = useGlobalStateContext();
	const { t } = useTranslation();
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
				<h1 className="textCenter title">Hiragana Quiz</h1>
			</div>
			<Checkbox
				text="All Hiragana"
				alphabet=""
				classList={`${allHiraganaActive ? "checked" : ""}`}
				handleMultipleChange={handleAllHiraganaChange}
			/>
			<div className="pageGrid">
				<CheckboxGroup
					title="Main Hiragana"
					subtitle="All Main Hiragana"
					shouldActivate={mainHiraganaActive || allHiraganaActive}
					data={main}
					handleMultipleChange={handleMainHiraganaChange}
				/>
				<CheckboxGroup
					title="Dakuten/Handakuten"
					subtitle="All Dakuten Hiragana"
					shouldActivate={dakutenHiraganaActive || allHiraganaActive}
					data={dakuten}
					handleMultipleChange={handleDakutenHiraganaChange}
					columnCount="oneColumn"
					classList={`mb-2 ${dakutenHiraganaActive ? "checked" : ""}`}
				/>
				<CheckboxGroup
					title="Combination"
					subtitle="All Combination Hiragana"
					shouldActivate={combinationHiraganaActive || allHiraganaActive}
					data={dakutenCombination}
					handleMultipleChange={handleCombinationHiraganaChange}
				/>
			</div>
			<div className="relativeCenter">
				<Link to="/quiz/hiragana" className="btn btn-primary btn-lg">
					{t("kata-start")}
				</Link>
			</div>
		</div>
	);
};

export default Hiragana;
