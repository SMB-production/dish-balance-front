import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import {
   greetingContainer,
   greetingFormContainer,
   greetingPhotoContainer,
   imagePhone,
   inputFieldsContainer,
   letsEatHealthyTypography,
   parentBoxContainer,
} from './styles.ts';
import { useTranslation } from 'react-i18next';

export const LogInPage = () => {
   const { t } = useTranslation('login');
   return (
      <Box sx={parentBoxContainer}>
         <Box sx={greetingContainer}>
            <Box sx={greetingPhotoContainer}>
               <img
                  src='../../../../public/icons/LogInPage_photo_phone.png'
                  alt='Phone'
                  style={imagePhone}
               />
            </Box>
            <Box sx={greetingFormContainer}>
               <Box>
                  <Typography variant='h1' sx={letsEatHealthyTypography}>
                     {t('Ваш путь к здоровому питанию!')}
                  </Typography>
               </Box>
               <Box sx={inputFieldsContainer}>
                  <TextField
                     id='outlined-helperText'
                     label={t('Ваша почта')}
                     helperText={t('Это поле обязательно')}
                  />
                  <TextField
                     id='outlined-helperText'
                     label={t('Ваш пароль')}
                     helperText={t('Это поле обязательно')}
                  />
                  <Button variant={'contained'}>{t('Войти')}</Button>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};
