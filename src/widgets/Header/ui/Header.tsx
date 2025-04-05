import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { headerStyles, linkStyles } from './styles.ts';

export const Header = () => {
   return (
      <Box component='header' sx={headerStyles}>
         <Link to='/' style={linkStyles}>
            На главную
         </Link>
         <Link to='/registration' style={linkStyles}>
            Регистрация
         </Link>
      </Box>
   );
};
