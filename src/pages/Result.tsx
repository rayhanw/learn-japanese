import React from "react";
import { useGlobalStateContext } from "../contexts/globalState";
import { useHistory } from "react-router-dom";
import { Head } from "../components/Head";
import { ResultSection } from "../components/ResultSection";

export const Result: React.FC = () => {
	const {
		state: { result },
		dispatch
	} = useGlobalStateContext();
	const history = useHistory();
	const { main, dakuten, dakutenCombination } = result;

	const restart = () => {
		dispatch({ type: "CLEAR_RESULT" });
		history.push("/");
	};

	return (
		<div id="resultPage">
			<Head title="Result" />
			<div className="pageGrid">
				<ResultSection title="Main Hiragana" content={main} />
				<ResultSection title="Dakuten Hiragana" content={dakuten} />
				<ResultSection
					title="Combination Hiragana"
					content={dakutenCombination}
				/>
			</div>
			<div className="flexAllCenter">
				<button onClick={restart} className="btn btn-primary btn-lg">
					Restart Quiz
				</button>
			</div>
		</div>
	);
};
