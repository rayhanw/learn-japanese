import React, { useState } from "react";

interface KataProps {
	japanese: string;
	answer: string;
}

export const Kata: React.FC<KataProps> = ({ japanese, answer }) => {
	const [isCorrect, setIsCorrect] = useState<true | false | "pending">(
		"pending"
	);
	const [isFocused, setIsFocused] = useState(false);
	const labelClass =
		isCorrect === "pending" ? "default" : isCorrect ? "correct" : "wrong";

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value !== "") {
			if (answer === e.target.value) {
				setIsCorrect(true);
			} else {
				setIsCorrect(false);
			}
		}
	};
	const handleFocus = () => {
		setIsFocused(prevState => !prevState);
	};

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
