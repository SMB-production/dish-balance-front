import { Button, TextField, ThemeProvider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { FormProvider } from 'react-hook-form';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { theme } from '../../../shared/style/theme';
import {
   bodyCharacteristics,
   greetingRegistrationContainer,
   greetingRegistrationFormContainer,
   greetingRegistrationPhoto,
   greetingRegistrationPhotoContainer,
   greetingRegistrationText,
   inputRegistrationFieldsContainer,
   parentRegistrationBoxContainer,
} from './styles.ts';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { postRegistrationRequest } from '../../../shared/api/registration.ts';
import { useNavigate } from 'react-router-dom';

export interface AuthForm {
   name: string;
   surname: string;
   age: number;
   weight?: number;
   email: string;
   password: string;
}

export const RegistrationPage = () => {
   const methods = useForm<AuthForm>();
   const { register, handleSubmit } = methods;

   const navigate = useNavigate();
   const handleSubmitForm: SubmitHandler<AuthForm> = async data => {
      await postRegistrationRequest(data);
      navigate('/login');
   };
   const { t } = useTranslation('registration');
   return (
      <ThemeProvider theme={theme}>
         <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
               <Box sx={parentRegistrationBoxContainer}>
                  <Box sx={greetingRegistrationContainer}>
                     <Box sx={greetingRegistrationPhotoContainer}>
                        <img
                           src='../../../../public/icons/LogInPage_photo_phone.png'
                           alt='Phone'
                           style={greetingRegistrationPhoto}
                        />
                     </Box>
                     <Box sx={greetingRegistrationFormContainer}>
                        <Box>
                           <Typography variant='h1' sx={greetingRegistrationText}>
                              {t('Начнем путь к здоровому питанию!')}
                           </Typography>
                        </Box>
                        <Box sx={inputRegistrationFieldsContainer}>
                           <TextField label={t('Введите Ваше имя')} {...register('name')} />

                           <TextField label={t('Введите Вашу фамилию')} {...register('surname')} />

                           <Box sx={bodyCharacteristics}>
                              <TextField
                                 label={t('Введите Ваш возраст')}
                                 sx={{ width: '50%' }}
                                 {...register('age')}
                              />

                              <TextField
                                 label={t('Введите Ваш вес')}
                                 sx={{ width: '50%' }}
                                 {...register('weight')}
                              />
                           </Box>

                           <TextField label={t('Введите Вашу почту')} {...register('email')} />
                           <TextField
                              label={t('Введите Ваш пароль')}
                              helperText={t('Это поле обязательно')}
                              {...register('password')}
                           />
                           <Button variant={'contained'} type='submit'>
                              {t('Зарегистрироваться')}
                           </Button>
                           <Typography>
                              {t('Уже есть аккаунт?')}
                              <Link to='/login'>{t('Войти')}</Link>
                           </Typography>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </form>
         </FormProvider>
      </ThemeProvider>
   );
};
