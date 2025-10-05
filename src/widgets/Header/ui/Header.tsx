import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinkedButton } from '@shared/LinkedButton';
import {
   accountIconContainer,
   companyNameContainer,
   headerTypography,
   toolbarContainer,
   buttonMarginContainer,
} from './styles.ts';
import { LangSwitcher } from '@features/i18n/LangSwitcher/ui/LangSwitcher.tsx';
import Box from '@mui/material/Box';
import { postLogoutRequest } from '@features/auth/logout/api/logout.ts';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { LogoutButton } from '@features/auth/logoutButton';

export const Header = () => {
   const { t } = useTranslation('translation');
   const navigate = useNavigate();
   const handleLogOut = async () => {
      try {
         await postLogoutRequest();
         navigate('/login');
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <AppBar elevation={0} position={'static'} sx={{ backgroundColor: 'white', color: 'black' }}>
         <Toolbar sx={toolbarContainer}>
            <Box sx={headerTypography}>
               <AccountCircleIcon sx={accountIconContainer} />
               <Typography sx={companyNameContainer}>SM DISH</Typography>
            </Box>

            <Box sx={{ display: 'flex' }}>
               <LinkedButton route='/' text={t('Главная')} sx={buttonMarginContainer} />
               <LinkedButton route='/' text={t('Мои блюда')} sx={buttonMarginContainer} />
               <LinkedButton route='/account' text={t('Профиль')} sx={buttonMarginContainer} />
               <LogoutButton text={t('Выйти')} onClick={handleLogOut} />
               <LangSwitcher />
            </Box>
         </Toolbar>
      </AppBar>
   );
};
