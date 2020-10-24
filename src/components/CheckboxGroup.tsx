import React from "react";
import { CheckboxCollection } from "./CheckboxCollection";
import { HIRAGANA_MAPPING } from "../constants";
import { Checkbox } from "./Checkbox";

interface CheckboxGroupProps {
	title: string;
	subtitle: string;
	shouldActivate: boolean;
	handleMultipleChange: () => void;
	data:
		| typeof HIRAGANA_MAPPING.main
		| typeof HIRAGANA_MAPPING.dakuten
		| typeof HIRAGANA_MAPPING.dakutenCombination;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
	title,
	subtitle,
	data,
	shouldActivate,
	handleMultipleChange
}) => {
	return (
		<div>
			<h2 className="title">{title}</h2>
			<CheckboxCollection data={data} shouldActivate={shouldActivate}>
				<Checkbox
					text={subtitle}
					hiragana=""
					classList="mb-2"
					handleMultipleChange={handleMultipleChange}
					checked={shouldActivate}
				/>
			</CheckboxCollection>
		</div>
	);
};
