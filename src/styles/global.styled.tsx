import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, :root {
        margin: 0;
        padding: 0;
        background-color: rgb(245, 245, 245);
        font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
    }
    
    main {
        display: grid;
        place-items: center;
        padding: 2em 0;
    }
    
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
`;
