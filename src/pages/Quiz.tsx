import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Kata } from "../components/Kata";
import { INSTRUCTIONS } from "../constants";
import { useGlobalStateContext } from "../contexts/globalState/globalState";
import { mapActiveToValues, shuffle } from "../utilities";
import { Head } from "../components/Head";

const Quiz: React.FC = () => {
	const { dispatch, state } = useGlobalStateContext();
	const [activeKata, setActiveKata] = useState<Record<string, string>[]>([]);
	const history = useHistory();
	const { hiragana, katakana } = state;
	const { type } = useParams<{ type: "hiragana" | "katakana" }>();

	const handleFinish = () => {
		history.push(`/result/${type}`);
	};

	useEffect(() => {
		return () => {
			dispatch({ type: "REMOVE_ALL", payload: { type } });
		};
	}, [dispatch, type]);

	useEffect(() => {
		setActiveKata(prevState => {
			const kata = type === "hiragana" ? hiragana.kata : katakana.kata;
			const main = mapActiveToValues(type, kata, "main");
			const dakuten = mapActiveToValues(type, kata, "dakuten");
			const combination = mapActiveToValues(type, kata, "dakutenCombination");

			const allActiveKata = [...main, ...dakuten, ...combination, ...prevState];

			return shuffle(shuffle(allActiveKata));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div id="quizPage">
			<Head title="Quiz" />
			<h1 className="title textCenter">
				Type Romaji for the{" "}
				{type[0].toUpperCase() + type.substr(1, type.length)} That You Know!
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

export default Quiz;
