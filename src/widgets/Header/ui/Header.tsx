import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router';

export const Header = () => {
   return (
      <AppBar position={'static'}>
         <Toolbar>
            <IconButton>
               <MenuIcon />
            </IconButton>
            <Typography variant={'h5'} sx={{ flexGrow: 1, ml: '10px' }}>
               SM DISH
            </Typography>

            <Button variant={'contained'} color={'secondary'} size={'large'} sx={{ mr: '20px' }}>
               <Link to={'/'}>На главную</Link>
            </Button>

            <Button variant={'contained'} color={'secondary'} size={'large'}>
               <Link to={'/registration'}>Регистрация</Link>
            </Button>
         </Toolbar>
      </AppBar>
   );
};
