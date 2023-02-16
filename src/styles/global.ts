import { createGlobalStyle, DefaultTheme, ThemeProps } from "styled-components";
import { } from '../../src/'


export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props: ThemeProps<DefaultTheme>) => props.theme['white-100-900']};
    -webkit-font-smoothing: antialiased;
  }

`;