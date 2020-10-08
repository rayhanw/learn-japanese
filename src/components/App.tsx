import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStateProvider } from "../contexts/globalState";
import { Hiragana } from "../pages/Hiragana";
import { Katakana } from "../pages/Katakana";
import { Quiz } from "../pages/Quiz";
import { Layout } from "./Layout";
import { Navbar } from "./Navbar";
import { Result } from "../pages/Result";

export const App: React.FC = () => {
	return (
		<Router>
			<GlobalStateProvider>
				<Layout>
					<Navbar />
					<main id="content">
						<Switch>
							<Route path="/quiz/:type">
								<Quiz />
							</Route>
							<Route path="/katakana">
								<Katakana />
							</Route>
							<Route path="/result/:type">
								<Result />
							</Route>
							<Route exact path={["/", "/hiragana"]}>
								<Hiragana />
							</Route>
						</Switch>
					</main>
				</Layout>
			</GlobalStateProvider>
		</Router>
	);
};
