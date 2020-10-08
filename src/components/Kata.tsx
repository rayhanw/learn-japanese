import React, { useState } from "react";
import { useGlobalStateContext } from "../contexts/globalState";
import useDidMountEffect from "../hooks/useDidMountEffect";
import { ALL_HIRAGANA_KEYS, ALL_KATAKANA_KEYS } from "../utilities";
import { useParams } from "react-router-dom";

interface KataProps {
	japanese: string;
	answer: string;
}

export const Kata: React.FC<KataProps> = ({ japanese, answer }) => {
	const [isCorrect, setIsCorrect] = useState<true | false | "pending">(
		"pending"
	);
	const [isFocused, setIsFocused] = useState(false);
	const {
		state: { result },
		dispatch
	} = useGlobalStateContext();
	const { type } = useParams<{ type: "hiragana" | "katakana" }>();
	const labelClass =
		isCorrect === "pending" ? "default" : isCorrect ? "correct" : "wrong";

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value !== "") {
			if (answer === e.target.value.toLowerCase()) {
				setIsCorrect(true);
			} else {
				setIsCorrect(false);
			}
		}
	};
	const handleFocus = () => {
		setIsFocused(prevState => !prevState);
	};
	const isHiragana = type === "hiragana";

	useDidMountEffect(() => {
		let group: "main" | "dakuten" | "dakutenCombination";
		let keys: any;
		let mainKey: {
			main: "mainHiragana" | "mainKatakana";
			dakuten: "dakutenHiragana" | "dakutenKatakana";
		};
		if (isHiragana) {
			keys = ALL_HIRAGANA_KEYS;
			mainKey = { main: "mainHiragana", dakuten: "dakutenHiragana" };
		} else {
			keys = ALL_KATAKANA_KEYS;
			mainKey = { main: "mainKatakana", dakuten: "dakutenKatakana" };
		}
		if (keys[mainKey.main].includes(answer)) {
			group = "main";
		} else if (keys[mainKey.dakuten].includes(answer)) {
			group = "dakuten";
		} else {
			group = "dakutenCombination";
		}

		if (!Object.keys(result[group]).includes(answer)) {
			dispatch({
				type: "ADD_RESULT",
				payload: { group, result: { [answer]: !!isCorrect } }
			});
		}
	}, [isCorrect, answer, dispatch]);

	return (
		<div
			className={`kata ${labelClass} ${isFocused ? "focus" : ""}`}
			onFocus={handleFocus}
			onBlur={handleFocus}
		>
			<div className="japaneseText">{japanese}</div>
			<input
				type="text"
				className="kataInput"
				onBlur={handleChange}
				disabled={isCorrect === true}
			/>
		</div>
	);
};
