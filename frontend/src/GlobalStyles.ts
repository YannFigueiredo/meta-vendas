import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        min-height: 100vh;
        background: linear-gradient(to bottom, #102347 10%, #181818 30%);
    }
`

export default GlobalStyles;