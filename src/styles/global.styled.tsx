import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, :root {
        margin: 0;
        padding: 0;
        background-color: rgb(245, 245, 245);
    }
    
    main {
        display: grid;
        place-items: center;
    }
`;
