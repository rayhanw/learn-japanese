interface QuizResult {
	main: Record<string, Record<string, boolean>>;
	dakuten: Record<string, Record<string, boolean>>;
	dakutenCombination: Record<string, Record<string, boolean>>;
}
interface QuizResultPayload {
	group: "main" | "dakuten" | "dakutenCombination";
	result: Record<string, boolean>;
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

export interface StateContext {
	hiragana: { kata: string[] };
	katakana: { kata: string[] };
	result: QuizResult;
}

export interface Store {
	state: StateContext;
	dispatch: React.Dispatch<Action>;
}
