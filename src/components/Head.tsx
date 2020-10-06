import React from "react";
import { Helmet } from "react-helmet";

interface HeadProps {
	title: string;
}

export const Head: React.FC<HeadProps> = ({ title }) => {
	return (
		<Helmet>
			<title>{title} | Tofugu Learn Hiragana Clone</title>
		</Helmet>
	);
};
