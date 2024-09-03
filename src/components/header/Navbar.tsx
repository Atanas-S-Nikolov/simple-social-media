import { IoShareSocialOutline } from "react-icons/io5";
import { StyledHeader, StyledThemeIconButton } from "./Navbar.styled";
import { NavbarProps } from "../../appTypes/props/NavbarProps";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar({ toggleTheme, isDarkTheme }: NavbarProps) {
	const themeButtonIcon = isDarkTheme ? <MdDarkMode /> : <MdLightMode />;

	return (
		<StyledHeader>
			<IoShareSocialOutline fontSize={32} />
			<StyledThemeIconButton onClick={toggleTheme}>{themeButtonIcon}</StyledThemeIconButton>
		</StyledHeader>
	);
}
