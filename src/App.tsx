import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './shared/style/theme';

function App() {
   return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
