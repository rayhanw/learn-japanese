import { Language } from "../contexts/globalState/types";
import { i18n } from "../utilities";

export const INSTRUCTIONS = [
	"Type your answer in romaji in the card's text field",
	"Press ENTER to submit",
	"Repeat for as many cards as you can",
	"You can try as many times as you want",
	'When you\'re done press the "Finish Quiz" button at the bottom'
];

export const LINKS = [
	{
		code: "home-link",
		url: "/"
	},
	{
		code: "hiragana-link",
		url: "/hiragana"
	},
	{
		code: "katakana-link",
		url: "/katakana"
	}
];

export const LANGUAGES: { code: Language; text: string }[] = [
	{
		code: "en",
		text: "English"
	},
	{
		code: "id",
		text: "Bahasa Indonesia"
	}
];
