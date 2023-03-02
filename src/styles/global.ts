import { createGlobalStyle, DefaultTheme, ThemeProps } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --fullSize: 100%;
    --wideSize: 1440px;
    --contentSize: 1120px;
  }

  :focus {
    outline: 0;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  body {
    background: ${(props: ThemeProps<DefaultTheme>) => props.theme['white-100']};
    color: ${(props: ThemeProps<DefaultTheme>) => props.theme['gray-700']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active {
      box-shadow: 1px ${props => props.theme['yellow-700']};
      -webkit-box-shadow: 0 0 0 30px ${props => props.theme['gray-400']} inset !important;
      border: 1px solid transparent !important;
      &:focus {
        border: 1px solid ${props => props.theme['yellow-700']};
      }
  }

  input:-webkit-autofill{
    -webkit-text-fill-color: ${props => props.theme['gray-700']} !important;
  }

`;