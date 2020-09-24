export const HIRAGANA_MAPPING = {
	main: {
		vowels: {
			a: "あ",
			i: "い",
			u: "う",
			e: "え",
			o: "お"
		},
		kGroup: {
			ka: "か",
			ki: "き",
			ku: "く",
			ke: "け",
			ko: "こ"
		},
		sGroup: {
			sa: "さ",
			shi: "し",
			su: "す",
			se: "せ",
			so: "そ"
		},
		tGroup: {
			ta: "た",
			chi: "ち",
			tsu: "つ",
			te: "て",
			to: "と"
		},
		nGroup: {
			na: "な",
			ni: "に",
			nu: "ぬ",
			ne: "ね",
			no: "の"
		},
		hGroup: {
			ha: "は",
			hi: "ひ",
			fu: "ふ",
			he: "へ",
			ho: "ほ"
		},
		mGroup: {
			ma: "ま",
			mi: "み",
			mu: "む",
			me: "め",
			mo: "も"
		},
		yGroup: {
			ya: "や",
			yu: "ゆ",
			yo: "よ"
		},
		rGroup: {
			ra: "ら",
			ri: "り",
			ru: "る",
			re: "れ",
			ro: "ろ"
		},
		wGroup: {
			wa: "わ",
			wo: "を"
		},
		others: {
			n: "ん"
		}
	},
	dakuten: {
		gGroup: {
			ga: "が",
			gi: "ぎ",
			gu: "ぐ",
			ge: "げ",
			go: "ご"
		},
		zGroup: {
			za: "ざ",
			zi: "じ",
			zu: "ず",
			ze: "ぜ",
			zo: "ぞ"
		},
		dGroup: {
			da: "だ",
			di: "ぢ",
			du: "づ",
			de: "で",
			do: "ど"
		},
		bGroup: {
			ba: "ば",
			bi: "び",
			bu: "ぶ",
			be: "べ",
			bo: "ぼ"
		},
		pGroup: {
			pa: "ぱ",
			pi: "ぴ",
			pu: "ぷ",
			pe: "ぺ",
			po: "ぽ"
		}
	},
	dakutenCombination: {
		kyGroup: {
			kya: "きゃ",
			kyu: "きゅ",
			kyo: "きょ"
		},
		shGroup: {
			sha: "しゃ",
			shu: "しゅ",
			sho: "しょ"
		},
		chGroup: {
			cha: "ちゃ",
			chu: "ちゅ",
			cho: "ちょ"
		},
		nyGroup: {
			nya: "にゃ",
			nyu: "にゅ",
			nyo: "にょ"
		},
		hyGroup: {
			hya: "ひゃ",
			hyu: "ひゅ",
			hyo: "ひょ"
		},
		myGroup: {
			mya: "みゃ",
			myu: "みゅ",
			myo: "みょ"
		},
		ryGroup: {
			rya: "りゃ",
			ryu: "りゅ",
			ryo: "りょ"
		},
		gyGroup: {
			gya: "ぎゃ",
			gyu: "ぎゅ",
			gyo: "ぎょ"
		},
		jGroup: {
			ja: "じゃ",
			ju: "じゅ",
			jo: "じょ"
		},
		dyGroup: {
			dya: "ぢゃ",
			dyu: "ぢゅ",
			dyo: "ぢょ"
		},
		byGroup: {
			bya: "びゃ",
			byu: "びゅ",
			byo: "びょ"
		},
		pyGroup: {
			pya: "ぴゃ",
			pyu: "ぴゅ",
			pyo: "ぴょ"
		}
	}
};

export const INSTRUCTIONS = [
	"Type your answer in romaji in the card's text field",
	"Press ENTER to submit",
	"Repeat for as many cards as you can",
	"You can try as many times as you want",
	'When you\'re done press the "Finish Quiz" button at the bottom'
];

export const LINKS = [
	{
		text: "Hiragana",
		url: "/hiragana"
	},
	{
		text: "Katakana",
		url: "/katakana"
	}
];
