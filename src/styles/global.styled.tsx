import { createGlobalStyle } from "styled-components";
import {
	BG_COLOR_GRAY,
	BLUE,
	RED,
	TEXT_DARK_GRAY,
	TEXT_PRIMARY_COLOR,
	TEXT_SECONDARY_COLOR,
} from "./variables";

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color-gray: ${BG_COLOR_GRAY};
        --text-primary-color: ${TEXT_PRIMARY_COLOR};
        --text-secondary-color: ${TEXT_SECONDARY_COLOR};
        --text-dark-gray: ${TEXT_DARK_GRAY};
        --red: ${RED};
        --blue: ${BLUE};
    }

    html, body {
        margin: 0;
        padding: 0;
        background-color: var(--bg-color-gray);
        font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
    }
    
    main {
        display: grid;
        place-items: center;
        padding: 2em 0;
    }
    
    h1, h2, h3, h4, h5, h6, p, span, div, section, hr {
        margin: 0;
    }

    button {
        cursor: pointer;
    }
`;
