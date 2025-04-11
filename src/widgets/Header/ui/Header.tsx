import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LinkedButton } from '../../../shared/LinkedButton';
import { buttonMargin, headerLabelName } from './styles.ts';

export const Header = () => {
   return (
      <AppBar position={'static'} sx={{ backgroundColor: '#b8e093' }}>
         <Toolbar>
            <IconButton>
               {/* Нереализованный функционал, необходимо доделать */}
               <MenuIcon />
            </IconButton>
            <Typography variant={'h5'} sx={headerLabelName}>
               SM DISH
            </Typography>

            <LinkedButton route='/' text='Главная' sx={buttonMargin} />
            <LinkedButton route='/registration' text='Регистрация' sx={buttonMargin} />
         </Toolbar>
      </AppBar>
   );
};
