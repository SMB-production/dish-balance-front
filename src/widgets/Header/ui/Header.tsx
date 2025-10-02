import { AppBar, Button, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinkedButton } from '../../../shared/LinkedButton';
import {
   accountIconContainer,
   companyNameContainer,
   headerTypography,
   toolbarContainer,
   buttonMarginContainer,
} from './styles.ts';
import { LangSwitcher } from '../../../shared/LangSwitcher/ui/LangSwitcher.tsx';
import { theme } from '../../../shared/style/theme';
import Box from '@mui/material/Box';
import { postLogoutRequest } from '../../../shared/api/logout.ts';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
      <ThemeProvider theme={theme}>
         <AppBar
            elevation={0}
            position={'static'}
            sx={{ backgroundColor: 'white', color: 'black' }}
         >
            <Toolbar sx={toolbarContainer}>
               <Box sx={headerTypography}>
                  <AccountCircleIcon sx={accountIconContainer} />
                  <Typography sx={companyNameContainer}>SM DISH</Typography>
               </Box>

               <Box sx={{ display: 'flex' }}>
                  <LinkedButton route='/' text={t('Главная')} sx={buttonMarginContainer} />
                  <LinkedButton route='/' text={t('Мои блюда')} sx={buttonMarginContainer} />
                  <LinkedButton route='/account' text={t('Профиль')} sx={buttonMarginContainer} />
                  <Button
                     variant={'outlined'}
                     sx={{ backgroundColor: 'white', color: 'black', mr: '10px' }}
                     onClick={handleLogOut}
                  >
                     {t('Выйти')}
                  </Button>
                  <LangSwitcher />
               </Box>
            </Toolbar>
         </AppBar>
      </ThemeProvider>
   );
};
