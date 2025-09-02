import { AppBar, Button, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinkedButton } from '../../../shared/LinkedButton';
import { buttonMargin } from './styles.ts';
import { LangSwitcher } from '../../../shared/LangSwitcher/ui/LangSwitcher.tsx';
import { theme } from '../../../shared/style/theme';
import Box from '@mui/material/Box';

export const Header = () => {
   const { t } = useTranslation('translation');
   return (
      <ThemeProvider theme={theme}>
         <AppBar
            elevation={0}
            position={'static'}
            sx={{ backgroundColor: 'white', color: 'black' }}
         >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <Typography fontWeight='700' fontSize='20px'>
                  SM DISH
               </Typography>

               <Box sx={{ display: 'flex' }}>
                  <LinkedButton route='/' text={t('Главная')} sx={buttonMargin} />
                  <LinkedButton route='/' text={t('Мои блюда')} sx={buttonMargin} />
                  <LinkedButton route='/' text={t('Профиль')} sx={buttonMargin} />
                  <Button
                     variant={'outlined'}
                     sx={{ backgroundColor: 'white', color: 'black', mr: '10px' }}
                  >
                     Выйти
                  </Button>
                  {/*Сделать выход из профиля по ссылке*/}
                  <LangSwitcher />
               </Box>
            </Toolbar>
         </AppBar>
      </ThemeProvider>
   );
};
