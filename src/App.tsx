import { ThemeProvider } from '@mui/material';
import { theme } from './shared/style/theme';
import { MainPage } from './pages/MainPage';
import { RegistrationPage } from './pages/Registration';
import { Routes, Route } from 'react-router-dom';
import { Header } from './widgets/Header';
import CssBaseline from '@mui/material/CssBaseline';
import './app/styles/globalStyles.css';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Header />
         <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/registration' element={<RegistrationPage />} />
         </Routes>
      </ThemeProvider>
   );
}

export default App;
