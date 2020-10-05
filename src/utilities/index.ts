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
