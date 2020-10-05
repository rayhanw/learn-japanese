import { HIRAGANA_MAPPING } from "../constants";

export const shuffle = (array: any[]) => array.sort(() => Math.random() - 0.5);

export const mapActiveToValues = (
	activeKata: string[],
	hiraganaKey: "main" | "dakuten" | "dakutenCombination"
) => {
	const kataToBeInputted: Record<string, string>[] = [];
	const hiraganaKeys = Object.keys(HIRAGANA_MAPPING[hiraganaKey]);

	activeKata.forEach(kata => {
		if (hiraganaKeys.includes(kata)) {
			const words = (HIRAGANA_MAPPING[hiraganaKey] as any)[kata];
			Object.keys(words).forEach(word => {
				kataToBeInputted.push({ [word]: words[word] });
			});
		}
	});

	return kataToBeInputted;
};

const ALL_MAIN_HIRAGANA_KEYS = Object.values(HIRAGANA_MAPPING.main)
	.map(k => Object.keys(k))
	.flat();
const ALL_DAKUTEN_HIRAGANA_KEYS = Object.values(HIRAGANA_MAPPING.dakuten)
	.map(k => Object.keys(k))
	.flat();
const ALL_DAKUTEN_COMBINATION_HIRAGANA_KEYS = Object.values(
	HIRAGANA_MAPPING.dakutenCombination
)
	.map(k => Object.keys(k))
	.flat();

export const ALL_HIRAGANA_KEYS = {
	mainHiragana: ALL_MAIN_HIRAGANA_KEYS,
	dakutenHiragana: ALL_DAKUTEN_HIRAGANA_KEYS,
	dakutenCombination: ALL_DAKUTEN_COMBINATION_HIRAGANA_KEYS
};
