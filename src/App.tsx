import { ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { theme } from './shared/style/theme';
import { MainPage } from './pages/MainPage';
import { RegistrationPage } from './pages/Registration';
import { Routes, Route } from 'react-router-dom';
import { Header } from './widgets/Header';
import CssBaseline from '@mui/material/CssBaseline';
import './app/styles/globalStyles.css';
import './shared/config/i18next/i18n';

function App() {
   return (
      <Suspense fallback='loading'>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Routes>
               <Route path='/' element={<MainPage />} />
               <Route path='/registration' element={<RegistrationPage />} />
            </Routes>
         </ThemeProvider>
      </Suspense>
   );
}

export default App;
