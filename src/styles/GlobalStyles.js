import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #0A0C10;
    font-family: 'Inter', sans-serif;
  }
`;



