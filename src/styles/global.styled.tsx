import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, :root {
        margin: 0;
        padding: 0;
        background-color: ${(props) => props.theme.background};
        font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
        box-sizing: border-box;
    }
    
    main {
        display: grid;
        place-items: center;
        padding: 2em 0;
    }
    
    h1, h2, h3, h4, h5, h6, p, span, div, section, hr {
        color: ${(props) => props.theme.text.primary};
        margin: 0;
    }

    button {
        cursor: pointer;
    }
`;
