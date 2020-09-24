import React from "react";

interface CardProps {}

export const Card: React.FC<CardProps> = () => {
	return (
		<div>
			<div>HIRAGANA</div>
			<div>ROMAJI</div>
		</div>
	);
};
