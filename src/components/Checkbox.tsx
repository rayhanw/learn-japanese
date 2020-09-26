import React, { useState } from "react";

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

	const titleText = hiragana === "" ? text : `${hiragana}/${text}`;

	return (
		<label
			className={`checkboxWrapper ${checked ? "checked" : ""} ${classList}`}
		>
			<input
				type="checkbox"
				className="checkbox"
				onChange={() => setChecked(prevState => !prevState)}
				checked={checked}
			/>
			<p className="checkboxLabel">{titleText}</p>
		</label>
	);
};
