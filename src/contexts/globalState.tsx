import React, { useContext, useReducer } from "react";

export interface StateContext {
	kata: string[];
}
interface Action {
	type: "ADD" | "REMOVE";
	payload: string;
}
export interface Store {
	state: StateContext;
	dispatch: React.Dispatch<Action>;
}

const initialState: StateContext = { kata: [] };
const GlobalStateContext = React.createContext<Store>({
	state: initialState,
	dispatch: () => null
});
const reducer = (state: StateContext, action: Action) => {
	switch (action.type) {
		case "ADD":
			return { kata: [...state.kata, action.payload] };
		case "REMOVE":
			return { kata: state.kata.filter(ele => ele !== action.payload) };
		default:
			return state;
	}
};

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
