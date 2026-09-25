import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Titulo = styled.h1`
  font-size: 2.5rem;
  color: #333333;
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin-bottom: 20px;
`

export const Paragrafo = styled.p`
  font-size: 3rem;
  color: red;
`