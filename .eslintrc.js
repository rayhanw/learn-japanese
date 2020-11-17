module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint", "react-hooks"],
	rules: {
		"react/prop-types": "off"
	},
	settings: {
		react: {
			version: "latest"
		}
	}
};
