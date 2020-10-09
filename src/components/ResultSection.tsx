import React from "react";

interface ResultSectionProps {
	title: string;
	content: Record<string, Record<string, boolean>>;
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
		<div>
			<h2 className="title">
        {title}
        <span className="fontSm blackText normalWeight ml-1">{trueLength}/{values.length}{" "}({truePercentage}%)</span>
      </h2>
			<div className="flex flexWrap">
				{keys.map((key, i) => (
					<div className="resultCard" key={i}>
						<div className="whiteText">
							<p className="noMargin">{key}</p>
						</div>
						<div className="flex">
							{content[key] ? (
								<input type="radio" />
							) : (
								<div className="whiteText">x: 1</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
