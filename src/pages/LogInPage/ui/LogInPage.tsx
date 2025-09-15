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
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { postLoginRequest } from '../../../shared/api/login.ts';
import { useNavigate } from 'react-router-dom';

export interface LoginForm {
   email: string;
   password: string;
}

export const LogInPage = () => {
   const { t } = useTranslation('login');
   const methods = useForm<LoginForm>();
   const navigate = useNavigate();
   const { register, handleSubmit } = methods;
   const handleSubmitLogin: SubmitHandler<LoginForm> = async data => {
      try {
         await postLoginRequest(data);
         navigate('/');
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <FormProvider {...methods}>
         <form onSubmit={handleSubmit(handleSubmitLogin)}>
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
                           label={t('Ваша почта')}
                           helperText={t('Это поле обязательно')}
                           {...register('email')}
                        />
                        <TextField
                           label={t('Ваш пароль')}
                           helperText={t('Это поле обязательно')}
                           {...register('password')}
                        />
                        <Button variant={'contained'} type='submit'>
                           {t('Войти')}
                        </Button>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </form>
      </FormProvider>
   );
};
