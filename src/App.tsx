import { ThemeProvider } from 'styled-components';
import { OrderContextProvider } from './contexts/OrderContext';
import { Router } from './Router';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderContextProvider>
        <Router />
      </OrderContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}  