import React, { useContext, useMemo } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface ThemeContext {
	theme: "dark" | "light";
	setTheme: () => void;
	toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContext | null>(null);
ThemeContext.displayName = "ThemeContext";

export const useThemeContext = () => useContext(ThemeContext);
export const ThemeContextProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const preferDark =
		window && window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useLocalStorage(
		"theme",
		preferDark ? "dark" : "light"
	);

	const contextValue = useMemo(
		() => ({
			theme,
			setTheme,
			toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
		}),
		[theme, setTheme]
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
};
