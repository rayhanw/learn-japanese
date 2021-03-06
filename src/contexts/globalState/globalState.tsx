import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { StateContext, Store } from "./types";

const initialState: StateContext = {
	hiragana: { kata: [] },
	katakana: { kata: [] },
	result: { main: {}, dakuten: {}, dakutenCombination: {} },
	language: "en"
};
const GlobalStateContext = createContext<Store>({
	state: initialState,
	dispatch: () => null
});
GlobalStateContext.displayName = "GlobalStateContext";

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const GlobalStateProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalStateContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalStateContext.Provider>
	);
};
