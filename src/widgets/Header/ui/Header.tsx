import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router';
import { headerLabelName } from './styles.ts';

export const Header = () => {
   return (
      <AppBar position={'static'} sx={{ backgroundColor: '#b8e093' }}>
         <Toolbar>
            <IconButton>
               {' '}
               {/* Нереализованный функционал, необходимо доделать */}
               <MenuIcon />
            </IconButton>
            <Typography variant={'h5'} sx={headerLabelName}>
               SM DISH
            </Typography>

            <Button
               component={Link}
               to='/'
               variant={'contained'}
               color={'secondary'}
               size={'large'}
               sx={{ mr: '20px' }}
            >
               Главная
            </Button>

            <Button
               component={Link}
               to='/registration'
               variant={'contained'}
               color={'secondary'}
               size={'large'}
            >
               Регистрация
            </Button>
         </Toolbar>
      </AppBar>
   );
};
