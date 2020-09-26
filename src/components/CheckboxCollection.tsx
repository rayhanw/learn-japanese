import React from "react";
import { Checkbox } from "./Checkbox";

interface CheckboxCollectionProps {
	data: any;
	columnCount?: string;
}

export const CheckboxCollection: React.FC<CheckboxCollectionProps> = ({
	data,
	columnCount = "",
	children
}) => {
	return (
		<div>
			{children}
			<div className={`cardsGrid ${columnCount}`}>
				{Object.keys(data).map((key, i) => (
					<Checkbox key={i} text={key} hiragana={(data as any)[key][key]} />
				))}
			</div>
		</div>
	);
};
