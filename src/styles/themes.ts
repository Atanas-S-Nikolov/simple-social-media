import {
	BG_COLOR_DARK,
	BG_COLOR_LIGHT,
	BORDER_COLOR_DARK,
	BORDER_COLOR_LIGHT,
	MOBILE,
	MOBILE_L,
	MOBILE_S,
	PRIMARY_COLOR_DARK,
	PRIMARY_COLOR_LIGHT,
	SECONDARY_COLOR_DARK,
	SECONDARY_COLOR_LIGHT,
	TABLET,
	TEXT_ACCENT_DARK,
	TEXT_ACCENT_LIGHT,
	TEXT_PRIMARY_COLOR_DARK,
	TEXT_PRIMARY_COLOR_LIGHT,
	TEXT_SECONDARY_COLOR_DARK,
	TEXT_SECONDARY_COLOR_LIGHT,
} from "./variables";

export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";

const commonTheme = {
	breakpoints: {
		tablet: TABLET,
		mobileL: MOBILE_L,
		mobile: MOBILE,
		mobileS: MOBILE_S,
	},
};

export const lightTheme = {
	...commonTheme,
	background: BG_COLOR_LIGHT,
	border: BORDER_COLOR_LIGHT,
	primary: PRIMARY_COLOR_LIGHT,
	secondary: SECONDARY_COLOR_LIGHT,
	text: {
		primary: TEXT_PRIMARY_COLOR_LIGHT,
		secondary: TEXT_SECONDARY_COLOR_LIGHT,
		accent: TEXT_ACCENT_LIGHT,
	},
};

export const darkTheme = {
	...commonTheme,
	background: BG_COLOR_DARK,
	border: BORDER_COLOR_DARK,
	primary: PRIMARY_COLOR_DARK,
	secondary: SECONDARY_COLOR_DARK,
	text: {
		primary: TEXT_PRIMARY_COLOR_DARK,
		secondary: TEXT_SECONDARY_COLOR_DARK,
		accent: TEXT_ACCENT_DARK,
	},
};
