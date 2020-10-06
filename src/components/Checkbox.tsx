import React, { useState, useEffect } from "react";
import { useGlobalStateContext } from "../contexts/globalState";

interface CheckboxProps {
	text: string;
	hiragana: string;
	classList?: string;
	handleMultipleChange?: () => void;
	checked?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
	hiragana,
	text,
	classList = "",
	handleMultipleChange,
	checked
}) => {
	const [localChecked, setLocalChecked] = useState(false);
	const { state, dispatch } = useGlobalStateContext();
	const titleText = hiragana === "" ? text : `${hiragana}/${text}`;

	const handleOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLocalChecked(prevState => !prevState);
		if (state.kata.includes(e.target.value)) {
			dispatch({ type: "REMOVE_KATA", payload: e.target.value });
		} else {
			dispatch({ type: "ADD_KATA", payload: e.target.value });
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!!handleMultipleChange) {
			handleMultipleChange();
		} else {
			handleOneChange(e);
		}
	};

	useEffect(() => {
		if (checked) {
			setLocalChecked(true);
		} else {
			setLocalChecked(false);
		}
	}, [checked]);

	return (
		<label
			className={`checkboxWrapper ${
				localChecked ? "checked" : ""
			} ${classList}`}
		>
			<input
				type="checkbox"
				className="checkbox"
				onChange={handleChange}
				checked={localChecked}
				value={text}
				autoCapitalize="off"
				autoComplete="off"
				autoCorrect="off"
			/>
			<p className="checkboxLabel">{titleText}</p>
		</label>
	);
};
