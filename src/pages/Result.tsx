import React from "react";
import { useGlobalStateContext } from "../contexts/globalState/globalState";
import { useHistory, useParams } from "react-router-dom";
import { Head } from "../components/Head";
import { ResultSection } from "../components/ResultSection";

const Result: React.FC = () => {
	const {
		state: { result },
		dispatch
	} = useGlobalStateContext();
	const history = useHistory();
	const { main, dakuten, dakutenCombination } = result;
	const { type } = useParams<{ type: "hiragana" | "katakana" }>();
	const capitalizedType = type[0].toUpperCase() + type.substr(1);

	const restart = () => {
		dispatch({ type: "CLEAR_RESULT" });
		history.push("/");
	};

	return (
		<div id="resultPage">
			<Head title="Result" />
			<div className="pageGrid">
				<ResultSection title={`Main ${capitalizedType}`} content={main} />
				<ResultSection title={`Dakuten ${capitalizedType}`} content={dakuten} />
				<ResultSection
					title={`Combination ${capitalizedType}`}
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

export default Result;
