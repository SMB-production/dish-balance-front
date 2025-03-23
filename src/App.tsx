import { ThemeProvider } from '@mui/material';
import { theme } from './shared/style/theme';
import { RegistrationPage } from './pages/Registration';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <RegistrationPage />
      </ThemeProvider>
   );
}

export default App;
