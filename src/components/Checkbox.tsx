import React, { useState } from "react";

interface CheckboxProps {
	text: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ text }) => {
	const [checked, setChecked] = useState(false);

	return (
		<label className={`checkboxWrapper ${checked ? "checked" : ""}`}>
			<input
				type="checkbox"
				className="checkbox"
				onChange={() => setChecked(prevState => !prevState)}
				checked={checked}
			/>
			<p className="checkboxLabel">{text}</p>
		</label>
	);
};
