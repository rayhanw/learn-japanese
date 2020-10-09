import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { StateContext, Store } from "./types";

const initialState: StateContext = {
	hiragana: { kata: [] },
	katakana: { kata: [] },
	result: { main: {}, dakuten: {}, dakutenCombination: {} }
};
const GlobalStateContext = createContext<Store>({
	state: initialState,
	dispatch: () => null
});

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
