import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { LinkedButton } from '../../../shared/LinkedButton';
import { buttonMargin, headerLabelName } from './styles.ts';
import { LangSwitcher } from '../../../shared/LangSwitcher/ui/LangSwitcher.tsx';

export const Header = () => {
   const { t } = useTranslation('translation');

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

            <LinkedButton route='/' text={t('Главная')} sx={buttonMargin} />
            <LinkedButton route='/registration' text={t('Регистрация')} sx={buttonMargin} />
            <LangSwitcher />
         </Toolbar>
      </AppBar>
   );
};
