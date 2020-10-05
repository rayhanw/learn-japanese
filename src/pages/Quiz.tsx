import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Kata } from "../components/Kata";
import { INSTRUCTIONS } from "../constants";
import { useGlobalStateContext } from "../contexts/globalState";
import { mapActiveToValues, shuffle } from "../utilities";

export const Quiz: React.FC = () => {
	const {
		dispatch,
		state: { kata }
	} = useGlobalStateContext();
	const [activeKata, setActiveKata] = useState<Record<string, string>[]>([]);
	const history = useHistory();

	const handleFinish = () => {
		console.log("SUBMIT");
		history.push("/result");
	};

	useEffect(() => {
		return () => {
			dispatch({ type: "REMOVE_ALL_HIRAGANA" });
		};
	}, [dispatch]);

	useEffect(() => {
		setActiveKata(prevState => {
			const mainHiragana = mapActiveToValues(kata, "main");
			const dakutenHiragana = mapActiveToValues(kata, "dakuten");
			const combinationHiragana = mapActiveToValues(kata, "dakutenCombination");

			const allActiveKata = [
				...mainHiragana,
				...dakutenHiragana,
				...combinationHiragana,
				...prevState
			];

			return shuffle(allActiveKata);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div id="quizPage">
			<h1 className="blueText textCenter">
				Type Romaji for the Hiragana That You Know!
			</h1>
			<ul>
				{INSTRUCTIONS.map((text, i) => (
					<li key={i}>{text}</li>
				))}
			</ul>
			<section>
				<div className="kataList">
					{activeKata.map((kata, i) => {
						const key = Object.keys(kata)[0];

						return <Kata japanese={kata[key]} answer={key} key={i} />;
					})}
				</div>
				<div className="buttonWrapper">
					<button className="btn btn-primary btn-lg" onClick={handleFinish}>
						Finish Quiz
					</button>
				</div>
			</section>
		</div>
	);
};
