import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStateProvider } from "../contexts/globalState/globalState";
import { Layout } from "./Layout";
import { Navbar } from "./Navbar";
import { Loading } from "./Loading";
import { Footer } from "./Footer";
import { ThemeContextProvider } from "../contexts/theme/theme";

const Hiragana = lazy(() => import("../pages/Hiragana"));
const Katakana = lazy(() => import("../pages/Katakana"));
const Quiz = lazy(() => import("../pages/Quiz"));
const Result = lazy(() => import("../pages/Result"));
const Landing = lazy(() => import("../pages/Landing"));

export const App: React.FC = () => {
	return (
		<Router>
			<ThemeContextProvider>
				<GlobalStateProvider>
					<Layout>
						<Navbar />
						<main id="content">
							<Suspense fallback={<Loading />}>
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
									<Route path="/hiragana">
										<Hiragana />
									</Route>
									<Route exact path="/">
										<Landing />
									</Route>
								</Switch>
							</Suspense>
						</main>
						<Footer />
					</Layout>
				</GlobalStateProvider>
			</ThemeContextProvider>
		</Router>
	);
};
