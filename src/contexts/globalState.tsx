import React, { createContext, useContext, useReducer } from "react";
import { HIRAGANA_MAPPING, KATAKANA_MAPPING } from "../constants";

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
	hiragana: { kata: string[] };
	katakana: { kata: string[] };
	result: QuizResult;
}

type AddMultipleActionTypes =
	| "ADD_ALL"
	| "ADD_MAIN"
	| "ADD_DAKUTEN"
	| "ADD_COMBINATION";
type RemoveMultipleActionTypes =
	| "REMOVE_ALL"
	| "REMOVE_MAIN"
	| "REMOVE_DAKUTEN"
	| "REMOVE_COMBINATION";

export type Action =
	| {
			type: "ADD_KATA" | "REMOVE_KATA";
			payload: { kata: string; type: "hiragana" | "katakana" };
	  }
	| {
			type: AddMultipleActionTypes;
			payload: { type: "hiragana" | "katakana" };
	  }
	| {
			type: RemoveMultipleActionTypes;
			payload: { type: "hiragana" | "katakana" };
	  }
	| { type: "ADD_RESULT"; payload: QuizResultPayload }
	| { type: "CLEAR_RESULT" };
export interface Store {
	state: StateContext;
	dispatch: React.Dispatch<Action>;
}

const initialState: StateContext = {
	hiragana: { kata: [] },
	katakana: { kata: [] },
	result: { main: {}, dakuten: {}, dakutenCombination: {} }
};
const GlobalStateContext = createContext<Store>({
	state: initialState,
	dispatch: () => null
});
const reducer = (state: StateContext, action: Action) => {
	switch (action.type) {
		case "ADD_KATA":
			return {
				...state,
				[action.payload.type]: {
					kata: [...state[action.payload.type].kata, action.payload.kata]
				}
			};
		case "REMOVE_KATA":
			return {
				...state,
				[action.payload.type]: {
					kata: state[action.payload.type].kata.filter(
						ele => ele !== action.payload.kata
					)
				}
			};
		case "ADD_ALL":
			if (action.payload.type === "hiragana") {
				return {
					...state,
					hiragana: {
						kata: [
							...state.hiragana.kata,
							...Object.keys(HIRAGANA_MAPPING.main),
							...Object.keys(HIRAGANA_MAPPING.dakuten),
							...Object.keys(HIRAGANA_MAPPING.dakutenCombination)
						]
					}
				};
			} else {
				return {
					...state,
					katakana: {
						kata: [
							...state.katakana.kata,
							...Object.keys(KATAKANA_MAPPING.main),
							...Object.keys(KATAKANA_MAPPING.dakuten),
							...Object.keys(KATAKANA_MAPPING.dakutenCombination)
						]
					}
				};
			}

		case "REMOVE_ALL":
			return { ...state, [action.payload.type]: { kata: [] } };
		case "ADD_MAIN":
			if (action.payload.type === "hiragana") {
				return {
					...state,
					hiragana: {
						kata: [
							...state.hiragana.kata,
							...Object.keys(HIRAGANA_MAPPING.main)
						]
					}
				};
			} else {
				return {
					...state,
					katakana: {
						kata: [
							...state.katakana.kata,
							...Object.keys(KATAKANA_MAPPING.main)
						]
					}
				};
			}
		case "REMOVE_MAIN":
			// TODO: Change
			return { ...state, [action.payload.type]: { kata: [] } };
		case "ADD_DAKUTEN":
			if (action.payload.type === "hiragana") {
				return {
					...state,
					hiragana: {
						kata: [
							...state.hiragana.kata,
							...Object.keys(HIRAGANA_MAPPING.dakuten)
						]
					}
				};
			} else {
				return {
					...state,
					katakana: {
						kata: [
							...state.katakana.kata,
							...Object.keys(KATAKANA_MAPPING.dakuten)
						]
					}
				};
			}
		case "REMOVE_DAKUTEN":
			// TODO: Change
			return { ...state, [action.payload.type]: { kata: [] } };
		case "ADD_COMBINATION":
			if (action.payload.type === "hiragana") {
				return {
					...state,
					hiragana: {
						kata: [
							...state.hiragana.kata,
							...Object.keys(HIRAGANA_MAPPING.dakutenCombination)
						]
					}
				};
			} else {
				return {
					...state,
					katakana: {
						kata: [
							...state.katakana.kata,
							...Object.keys(KATAKANA_MAPPING.dakutenCombination)
						]
					}
				};
			}
		case "REMOVE_COMBINATION":
			// TODO: Change
			return { ...state, [action.payload.type]: { kata: [] } };
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
