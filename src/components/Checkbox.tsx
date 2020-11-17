import React, { useState, useEffect } from "react";
import { useGlobalStateContext } from "../contexts/globalState/globalState";
import { useLocation } from "react-router-dom";

interface CheckboxProps {
	text: string;
	alphabet: string;
	classList?: string;
	handleMultipleChange?: () => void;
	checked?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
	alphabet,
	text,
	classList = "",
	handleMultipleChange,
	checked
}) => {
	const [localChecked, setLocalChecked] = useState(false);
	const { state, dispatch } = useGlobalStateContext();
	const titleText = alphabet === "" ? text : `${alphabet}/${text}`;
	const location = useLocation();
	let type: "katakana" | "hiragana";

	if (location.pathname.includes("katakana")) {
		type = "katakana";
	} else {
		type = "hiragana";
	}

	const handleOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLocalChecked(prevState => !prevState);
		if (state[type].kata.includes(e.target.value)) {
			dispatch({
				type: "REMOVE_KATA",
				payload: { kata: e.target.value, type }
			});
		} else {
			dispatch({ type: "ADD_KATA", payload: { kata: e.target.value, type } });
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (handleMultipleChange) {
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
				spellCheck={false}
			/>
			<p className="checkboxLabel">{titleText}</p>
		</label>
	);
};
