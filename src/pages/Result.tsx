import React from "react";
import { useGlobalStateContext } from "../contexts/globalState";

export const Result: React.FC = () => {
	const {
		state: { result }
	} = useGlobalStateContext();
	const { main, dakuten, dakutenCombination } = result;

	return (
		<div id="resultPage">
			<div className="pageGrid">
				<div>
					<h2 className="title">Main Hiragana</h2>
					<div className="flex flexWrap">
						{Object.keys(main).map((key, i) => (
							<div className="resultCard" key={i}>
								<div className="whiteText">
									<p className="noMargin">{key}</p>
								</div>
								<div className="flex">
									{main[key] ? (
										<input type="radio" />
									) : (
										<div className="whiteText">x: 1</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="title">Dakuten Hiragana</h2>
					<div className="flex flexWrap">
						{Object.keys(dakuten).map((key, i) => (
							<div className="resultCard" key={i}>
								<div className="whiteText">
									<p className="noMargin">{key}</p>
								</div>
								<div className="flex">
									{dakuten[key] ? (
										<input type="radio" />
									) : (
										<div className="whiteText">x: 1</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="title">Combination Hiragana</h2>
					<div className="flex flexWrap">
						{Object.keys(dakutenCombination).map((key, i) => (
							<div className="resultCard" key={i}>
								<div className="whiteText">
									<p className="noMargin">{key}</p>
								</div>
								<div className="flex">
									{dakutenCombination[key] ? (
										<input type="radio" />
									) : (
										<div className="whiteText">x: 1</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
