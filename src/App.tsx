import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Router from './routes';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme as any}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
