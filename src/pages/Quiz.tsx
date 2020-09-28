import React, { useEffect } from "react";
import { useGlobalStateContext } from "../contexts/globalState";

export const Quiz: React.FC = () => {
	const { dispatch } = useGlobalStateContext();

	useEffect(() => {
		return () => {
			dispatch({ type: "REMOVE_ALL_HIRAGANA" });
		};
	}, [dispatch]);

	return (
		<div id="quizPage">
			<h1>Quiz</h1>
		</div>
	);
};
