import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Router from './routes';
import GlobalStyles from './styles/globalStyles';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ThemeProvider theme={theme as any}>
      <AuthProvider>
        <GlobalStyles />
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
