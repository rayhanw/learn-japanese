import React from "react";
import { CheckboxCollection } from "./CheckboxCollection";
import { HIRAGANA_MAPPING, KATAKANA_MAPPING } from "../constants";
import { Checkbox } from "./Checkbox";

type Data =
	| typeof HIRAGANA_MAPPING.main
	| typeof HIRAGANA_MAPPING.dakuten
	| typeof HIRAGANA_MAPPING.dakutenCombination
	| typeof KATAKANA_MAPPING.main
	| typeof KATAKANA_MAPPING.dakuten
	| typeof KATAKANA_MAPPING.dakutenCombination;

interface CheckboxGroupProps {
	title: string;
	subtitle: string;
	shouldActivate: boolean;
	handleMultipleChange: () => void;
	data: Data;
	columnCount?: string;
	classList?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
	title,
	subtitle,
	data,
	shouldActivate,
	handleMultipleChange,
	columnCount = "",
	classList = "mb-2"
}) => {
	return (
		<div>
			<h2 className="title">{title}</h2>
			<CheckboxCollection
				data={data}
				shouldActivate={shouldActivate}
				columnCount={columnCount}
			>
				<Checkbox
					text={subtitle}
					alphabet=""
					classList={classList}
					handleMultipleChange={handleMultipleChange}
					checked={shouldActivate}
				/>
			</CheckboxCollection>
		</div>
	);
};
