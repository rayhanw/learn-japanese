import React, { useState, useEffect } from "react";
import { useGlobalStateContext } from "../contexts/globalState";
import { HIRAGANA_MAPPING } from "../constants";

const mapActiveToValues = (
	activeKata: string[],
	hiraganaKey: "main" | "dakuten" | "dakutenCombination"
) => {
	const kataToBeInputted: Record<string, string>[] = [];
	const hiraganaKeys = Object.keys(HIRAGANA_MAPPING[hiraganaKey]);

	activeKata.forEach(kata => {
		if (hiraganaKeys.includes(kata)) {
			const words = (HIRAGANA_MAPPING[hiraganaKey] as any)[kata];
			Object.keys(words).forEach(word => {
				kataToBeInputted.push({ [word]: words[word] });
			});
		}
	});

	return kataToBeInputted;
};

export const Quiz: React.FC = () => {
	const {
		dispatch,
		state: { kata }
	} = useGlobalStateContext();
	const [activeKata, setActiveKata] = useState<Record<string, string>[]>([]);

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

			return [
				...mainHiragana,
				...dakutenHiragana,
				...combinationHiragana,
				...prevState
			];
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div id="quizPage">
			<h1>Quiz</h1>
			<section>
				{activeKata.map((kata, i) => {
					const key = Object.keys(kata)[0];

					return (
						<div className="flex" key={i}>
							<p>{key}</p>
							<p>:</p>
							<p>{kata[key]}</p>
						</div>
					);
				})}
			</section>
		</div>
	);
};
