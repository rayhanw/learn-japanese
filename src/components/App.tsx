import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { INSTRUCTIONS } from "../constants";
import { GlobalStateProvider } from "../contexts/globalState";
import { Hiragana } from "../pages/Hiragana";
import { Katakana } from "../pages/Katakana";
import { Quiz } from "../pages/Quiz";
import { Layout } from "./Layout";
import { Navbar } from "./Navbar";

export const App: React.FC = () => {
	return (
		<Router>
			<GlobalStateProvider>
				<Layout>
					<header>
						<Navbar />
						<h1>Type Romaji for the Hiragana That You Know!</h1>
						<ul>
							{INSTRUCTIONS.map((text, i) => (
								<li key={i}>{text}</li>
							))}
						</ul>
					</header>
					<main id="content">
						<Switch>
							<Route path="/quiz">
								<Quiz />
							</Route>
							<Route path="/hiragana">
								<Hiragana />
							</Route>
							<Route path="/katakana">
								<Katakana />
							</Route>
							<Route path="/">
								<Hiragana />
							</Route>
						</Switch>
					</main>
				</Layout>
			</GlobalStateProvider>
		</Router>
	);
};
