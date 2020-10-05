import React from "react";
import { useGlobalStateContext } from "../contexts/globalState";
import { useHistory } from "react-router-dom";

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
			<div className="pageGrid">
				<div>
					<h2 className="title">Main Hiragana</h2>
					<div className="flex flexWrap">
						{Object.keys(main).map((key, i) => (
							<div className="resultCard" key={i}>
								<div className="whiteText">
									<p className="noMargin">{key}</p>
								</div>
								<div className="flex">
									{main[key] ? (
										<input type="radio" />
									) : (
										<div className="whiteText">x: 1</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="title">Dakuten Hiragana</h2>
					<div className="flex flexWrap">
						{Object.keys(dakuten).map((key, i) => (
							<div className="resultCard" key={i}>
								<div className="whiteText">
									<p className="noMargin">{key}</p>
								</div>
								<div className="flex">
									{dakuten[key] ? (
										<input type="radio" />
									) : (
										<div className="whiteText">x: 1</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="title">Combination Hiragana</h2>
					<div className="flex flexWrap">
						{Object.keys(dakutenCombination).map((key, i) => (
							<div className="resultCard" key={i}>
								<div className="whiteText">
									<p className="noMargin">{key}</p>
								</div>
								<div className="flex">
									{dakutenCombination[key] ? (
										<input type="radio" />
									) : (
										<div className="whiteText">x: 1</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="flexAllCenter">
				<button onClick={restart} className="btn btn-primary btn-lg">
					Restart Quiz
				</button>
			</div>
		</div>
	);
};
