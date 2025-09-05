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

interface AuthForm {
   name: string;
   age: number;
   weight: number;
   email: string;
   password: string;
}

export const RegistrationPage = () => {
   const methods = useForm<AuthForm>();
   const { register, handleSubmit } = methods;

   const handleSubmitForm: SubmitHandler<AuthForm> = data => {
      console.log(data);
      //реализовать интеграцию с бекендом
   };

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
                              Начнем путь к здоровому питанию!
                           </Typography>
                        </Box>
                        <Box sx={inputRegistrationFieldsContainer}>
                           <TextField
                              id='outlined-helperText'
                              label='Введите Ваше имя'
                              {...register('name')}
                           />

                           <Box sx={bodyCharacteristics}>
                              <TextField
                                 id='outlined-helperText'
                                 label='Введите Ваш возраст'
                                 sx={{ width: '50%' }}
                                 {...register('age')}
                              />

                              <TextField
                                 id='outlined-helperText'
                                 label='Введите Ваш вес'
                                 sx={{ width: '50%' }}
                                 {...register('weight')}
                              />
                           </Box>

                           <TextField
                              id='outlined-helperText'
                              label='Введите Вашу почту'
                              {...register('email')}
                           />
                           <TextField
                              id='outlined-helperText'
                              label='Введите Ваш пароль'
                              helperText='Это поле обязательно'
                              {...register('password')}
                           />
                           <Button variant={'contained'} type='submit'>
                              Войти
                           </Button>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </form>
         </FormProvider>
      </ThemeProvider>
   );
};
