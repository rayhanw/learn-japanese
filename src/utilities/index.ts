import { HIRAGANA_MAPPING, KATAKANA_MAPPING } from "../constants";

export const shuffle = (array: any[]) => array.sort(() => Math.random() - 0.5);

export const mapActiveToValues = (
	type: "katakana" | "hiragana",
	activeKata: string[],
	key: "main" | "dakuten" | "dakutenCombination"
) => {
	const kataToBeInputted: Record<string, string>[] = [];
	let keys = Object.keys(
		type === "hiragana" ? HIRAGANA_MAPPING[key] : KATAKANA_MAPPING[key]
	);

	activeKata.forEach(kata => {
		if (keys.includes(kata)) {
			let words: Record<string, string>;
			if (type === "hiragana") {
				words = (HIRAGANA_MAPPING[key] as any)[kata];
			} else {
				words = (KATAKANA_MAPPING[key] as any)[kata];
			}
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
