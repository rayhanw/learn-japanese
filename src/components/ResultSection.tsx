import React from "react";
import { ResultCard } from "./ResultCard";

interface ResultSectionProps {
	title: string;
	content: Record<string, boolean>;
}

export const ResultSection: React.FC<ResultSectionProps> = ({
	title,
	content
}) => {
  const keys = Object.keys(content);
  const values = Object.values(content);
  const valuesLength = values.length;
  const trueLength = values.filter(ele => ele).length;
  const truePercentage = ((trueLength * 100) / valuesLength).toFixed();

  if (keys.length === 0) return null;

	return (
		<div className="resultSection">
			<div className="flex">
        <h2 className="title mr-1">{title}</h2>
        <span className="fontSm blackText normalWeight alignSelfEnd mb-1">{trueLength}/{values.length}{" "}({truePercentage}%)</span>
      </div>
			<div className="flex flexWrap">
				{keys.map((key, i) => {
					return <ResultCard kataKey={key} value={content[key]} key={i} />
        }
			  )}
			</div>
		</div>
	);
};
