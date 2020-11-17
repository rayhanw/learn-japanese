import React, { useEffect } from "react";
import { useThemeContext } from "../contexts/theme/theme";
import useDidMountEffect from "../hooks/useDidMountEffect";

export const Layout: React.FC = ({ children }) => {
	const { theme } = useThemeContext();

	useEffect(() => {
		if (theme === "dark") {
			document.body.classList.add("dark");
		}
	}, []);

	useDidMountEffect(() => {
		if (document.body.classList.contains("dark")) {
			document.body.classList.remove("dark");
			document.body.classList.add("light");
		} else {
			document.body.classList.add("dark");
			document.body.classList.remove("light");
		}
	}, [theme]);

	return <div className="layout">{children}</div>;
};
