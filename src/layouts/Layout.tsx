import { PropsWithChildren, useState } from "react";
import Navbar from "../components/header/Navbar";
import { GlobalStyle } from "../styles/global.styled";
import { ThemeProvider } from "styled-components";
import { DARK_THEME, darkTheme, LIGHT_THEME, lightTheme, } from "../styles/themes";

export default function RootLayout({ children }: PropsWithChildren) {
	const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"));
	const isDarkTheme = currentTheme === DARK_THEME;
	const theme = isDarkTheme ? darkTheme : lightTheme;

	function toggleTheme() {
		const updatedTheme = isDarkTheme ? LIGHT_THEME : DARK_THEME;
		setCurrentTheme(updatedTheme);
		localStorage.setItem("theme", updatedTheme);
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
			<main>{children}</main>
		</ThemeProvider>
	);
}
