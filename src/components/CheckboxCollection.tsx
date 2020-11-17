/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Checkbox } from "./Checkbox";

interface CheckboxCollectionProps {
	data: any;
	columnCount?: string;
	shouldActivate: boolean;
}

export const CheckboxCollection: React.FC<CheckboxCollectionProps> = ({
	data,
	columnCount = "",
	children,
	shouldActivate
}) => {
	return (
		<div>
			{children}
			<div className={`cardsGrid ${columnCount}`}>
				{Object.keys(data).map((key, i) => (
					<Checkbox
						key={i}
						text={key}
						alphabet={(data as any)[key][key]}
						classList={shouldActivate ? "checked" : ""}
					/>
				))}
			</div>
		</div>
	);
};
