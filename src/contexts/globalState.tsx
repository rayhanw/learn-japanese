import React, { createContext, useContext, useReducer } from "react";
import { HIRAGANA_MAPPING } from "../constants";

interface QuizResult {
	main: Record<string, Record<string, boolean>>;
	dakuten: Record<string, Record<string, boolean>>;
	dakutenCombination: Record<string, Record<string, boolean>>;
}
interface QuizResultPayload {
	group: "main" | "dakuten" | "dakutenCombination";
	result: Record<string, boolean>;
}
export interface StateContext {
	kata: string[];
	result: QuizResult;
}
export type Action =
	| { type: "ADD_KATA" | "REMOVE_KATA"; payload: string }
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
	  }
	| { type: "ADD_RESULT"; payload: QuizResultPayload }
	| { type: "CLEAR_RESULT" };
export interface Store {
	state: StateContext;
	dispatch: React.Dispatch<Action>;
}

const initialState: StateContext = {
	kata: [],
	result: { main: {}, dakuten: {}, dakutenCombination: {} }
};
const GlobalStateContext = createContext<Store>({
	state: initialState,
	dispatch: () => null
});
const reducer = (state: StateContext, action: Action) => {
	switch (action.type) {
		case "ADD_KATA":
			return { ...state, kata: [...state.kata, action.payload] };
		case "REMOVE_KATA":
			return {
				...state,
				kata: state.kata.filter(ele => ele !== action.payload)
			};
		case "ADD_ALL_HIRAGANA":
			return {
				...state,
				kata: [
					...state.kata,
					...Object.keys(HIRAGANA_MAPPING.main),
					...Object.keys(HIRAGANA_MAPPING.dakuten),
					...Object.keys(HIRAGANA_MAPPING.dakutenCombination)
				]
			};
		case "REMOVE_ALL_HIRAGANA":
			return { ...state, kata: [] };
		case "ADD_MAIN_HIRAGANA":
			return {
				...state,
				kata: [...state.kata, ...Object.keys(HIRAGANA_MAPPING.main)]
			};
		case "REMOVE_MAIN_HIRAGANA":
			// TODO: Change
			return { ...state, kata: [] };
		case "ADD_DAKUTEN_HIRAGANA":
			return {
				...state,
				kata: [...state.kata, ...Object.keys(HIRAGANA_MAPPING.dakuten)]
			};
		case "REMOVE_DAKUTEN_HIRAGANA":
			// TODO: Change
			return { ...state, kata: [] };
		case "ADD_COMBINATION_HIRAGANA":
			return {
				...state,
				kata: [
					...state.kata,
					...Object.keys(HIRAGANA_MAPPING.dakutenCombination)
				]
			};
		case "REMOVE_COMBINATION_HIRAGANA":
			// TODO: Change
			return { ...state, kata: [] };
		case "ADD_RESULT":
			return {
				...state,
				result: {
					...state.result,
					[action.payload.group]: {
						...(state.result as any)[action.payload.group],
						...action.payload.result
					}
				}
			};
		case "CLEAR_RESULT":
			return {
				...state,
				result: {
					main: {},
					dakuten: {},
					dakutenCombination: {}
				}
			};
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
