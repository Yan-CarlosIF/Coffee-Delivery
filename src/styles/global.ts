import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["background"]};
  }

  body {
    background-color: ${({ theme }) => theme["background"]};
    color: ${({ theme }) => theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  
  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    line-height: 1.3;
    font-weight: 400;

    h1, h2, h3 {
      font-family: "Baloo 2", sans-serif;
    }
  }
  
`;
