import { StateContext, Action } from "./types";
import { HIRAGANA_MAPPING, KATAKANA_MAPPING } from "../../constants";

export const reducer = (state: StateContext, action: Action) => {
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
		case "CLEAR_ALL":
			return {
				hiragana: { kata: [] },
				katakana: { kata: [] },
				result: { dakuten: {}, dakutenCombination: {}, main: {} }
			};
		default:
			return state;
	}
};
