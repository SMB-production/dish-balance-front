import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { LinkedButton } from '../../../shared/LinkedButton';
import { buttonMargin } from './styles.ts';
import { LangSwitcher } from '../../../shared/LangSwitcher/ui/LangSwitcher.tsx';

export const Header = () => {
   const { t } = useTranslation('translation');

   return (
      <AppBar
         position={'static'}
         sx={{ backgroundColor: '#374151', justifyContent: 'space-between' }}
      >
         <Toolbar>
            <IconButton sx={{}}>
               {/* Нереализованный функционал, необходимо доделать */}
               <MenuIcon />
            </IconButton>

            <LinkedButton route='/' text={t('Главная')} sx={buttonMargin} />
            <LinkedButton route='/registration' text={t('Регистрация')} sx={buttonMargin} />
            <LinkedButton route='/login' text={t('Вход')} sx={buttonMargin} />
            <LangSwitcher />
         </Toolbar>
      </AppBar>
   );
};
