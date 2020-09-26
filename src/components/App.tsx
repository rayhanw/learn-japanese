import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { INSTRUCTIONS } from "../constants";
import { Navbar } from "./Navbar";
import { Hiragana } from "../pages/Hiragana";
import { Katakana } from "../pages/Katakana";
import { Layout } from "./Layout";
import { GlobalStateProvider } from "../contexts/globalState";

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
