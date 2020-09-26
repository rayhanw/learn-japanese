import React, { useContext, useReducer } from "react";
import { HIRAGANA_MAPPING } from "../constants";

export interface StateContext {
	kata: string[];
}
export type Action =
	| { type: "ADD" | "REMOVE"; payload: string }
	| {
			type:
				| "ADD_ALL_HIRAGANA"
				| "REMOVE_ALL_HIRAGANA"
				| "ADD_MAIN_HIRAGANA"
				| "REMOVE_MAIN_HIRAGANA"
				| "ADD_DAKUTEN_HIRAGANA"
				| "REMOVE_DAKUTEN_HIRAGANA"
				| "ADD_COMBINATION_HIRAGANA"
				| "REMOVE_COMBINATION_HIRAGANA";
	  };
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
		case "ADD_ALL_HIRAGANA":
			return {
				kata: [
					...state.kata,
					...Object.keys(HIRAGANA_MAPPING.main),
					...Object.keys(HIRAGANA_MAPPING.dakuten),
					...Object.keys(HIRAGANA_MAPPING.dakutenCombination)
				]
			};
		case "REMOVE_ALL_HIRAGANA":
			return { kata: [] };
		case "ADD_MAIN_HIRAGANA":
			return { kata: [...state.kata, ...Object.keys(HIRAGANA_MAPPING.main)] };
		case "REMOVE_MAIN_HIRAGANA":
			// TODO: Change
			return { kata: [] };
		case "ADD_DAKUTEN_HIRAGANA":
			return {
				kata: [...state.kata, ...Object.keys(HIRAGANA_MAPPING.dakuten)]
			};
		case "REMOVE_DAKUTEN_HIRAGANA":
			// TODO: Change
			return { kata: [] };
		case "ADD_COMBINATION_HIRAGANA":
			return {
				kata: [
					...state.kata,
					...Object.keys(HIRAGANA_MAPPING.dakutenCombination)
				]
			};
		case "REMOVE_COMBINATION_HIRAGANA":
			// TODO: Change
			return { kata: [] };
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
