import { ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { theme } from './shared/style/theme';
import CssBaseline from '@mui/material/CssBaseline';
import './app/styles/globalStyles.css';
import './shared/config/i18next/i18n';
import { AppRoutes } from './app/AppRoutes/AppRoutes.tsx';

function App() {
   return (
      <Suspense fallback='loading'>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRoutes />
         </ThemeProvider>
      </Suspense>
   );
}

export default App;
