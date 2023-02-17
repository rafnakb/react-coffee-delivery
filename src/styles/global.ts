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
`;