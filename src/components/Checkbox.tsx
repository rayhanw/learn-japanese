import React, { useState } from "react";
import { useGlobalStateContext } from "../contexts/globalState";

interface CheckboxProps {
	text: string;
	hiragana: string;
	classList?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
	hiragana,
	text,
	classList = ""
}) => {
	const [checked, setChecked] = useState(false);
	const { state, dispatch } = useGlobalStateContext();
	const titleText = hiragana === "" ? text : `${hiragana}/${text}`;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(prevState => !prevState);
		if (state.kata.includes(e.target.value)) {
			dispatch({ type: "REMOVE", payload: e.target.value });
		} else {
			dispatch({ type: "ADD", payload: e.target.value });
		}
	};

	return (
		<label
			className={`checkboxWrapper ${checked ? "checked" : ""} ${classList}`}
		>
			<input
				type="checkbox"
				className="checkbox"
				onChange={handleChange}
				checked={checked}
				value={text}
			/>
			<p className="checkboxLabel">{titleText}</p>
		</label>
	);
};
