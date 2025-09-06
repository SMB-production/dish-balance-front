import Box from '@mui/material/Box';
import {
   addYourDishTypography,
   cpfcForm,
   cpfcFormContainer,
   dishesFormContainer,
   dishListContainer,
   greetingTextAndGraphContainer,
   greetingTextContainer,
   headerContainer,
   mainPageParentContainer,
   ringGraphContainer,
} from './styles.ts';
import { Header } from '../../../widgets/Header';
import { Button, TextField, Typography } from '@mui/material';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import i18n from 'i18next';

export const MainPage = () => {
   const { t } = useTranslation('main');

   useEffect(() => {
      i18n.changeLanguage(navigator.language);
   }, []);
   return (
      <Box sx={mainPageParentContainer}>
         <Box sx={dishesFormContainer}>
            <Box sx={headerContainer}>
               <Header />
            </Box>
            <Box sx={greetingTextAndGraphContainer}>
               <Typography sx={greetingTextContainer}>
                  {t('Cледи за своим питанием легко и удобно!')}
               </Typography>
               <Box sx={ringGraphContainer}>
                  <DataSaverOffIcon fontSize='large' />
               </Box>
            </Box>

            <Box sx={cpfcFormContainer}>
               <Typography sx={addYourDishTypography}>{t('Добавьте свое блюдо')}</Typography>
               <Box sx={cpfcForm}>
                  <TextField label={t('Название блюда')} />
                  <TextField label={t('Белки (Б)')} />
                  <TextField label={t('Жиры (Ж)')} />
                  <TextField label={t('Углеводы (У)')} />
                  <TextField label={t('Калории (К)')} />

                  <Button variant='contained' sx={{ fontSize: '18px' }}>
                     {t('Добавить блюдо')}
                  </Button>
               </Box>
            </Box>

            <Box sx={dishListContainer}>
               <Box>Список продуктов</Box>
            </Box>
         </Box>
      </Box>
   );
};
