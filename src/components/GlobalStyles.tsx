import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;