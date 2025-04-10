import { Button, TextField, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import { FormProvider, type SubmitErrorHandler } from 'react-hook-form';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { theme } from '../../../shared/style/theme';
import { parentStyles, authFormStyles, greetingTextStyles, inputValueStyles } from './styles.ts';

interface AuthForm {
   name: string;
   age: number;
   email: string;
}

export const RegistrationPage = () => {
   const methods = useForm<AuthForm>({
      defaultValues: {
         age: 0,
      },
   });
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = methods;

   const handleSubmitForm: SubmitHandler<AuthForm> = data => {
      console.log(data);
   };

   const handleSubmitFormError: SubmitErrorHandler<AuthForm> = data => {
      console.log(data);
   };

   return (
      <ThemeProvider theme={theme}>
         <Box sx={parentStyles}>
            <Box sx={authFormStyles}>
               <Box sx={greetingTextStyles}>Давайте познакомимся!</Box>
               <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(handleSubmitForm, handleSubmitFormError)}>
                     <TextField
                        placeholder='Введите ваше имя'
                        sx={inputValueStyles}
                        {...register('name', { required: true })}
                        aria-invalid={!!errors.name}
                     />
                     <TextField
                        placeholder={'Ваша фамилия'}
                        sx={inputValueStyles}
                        {...register('age', { required: true })}
                     />
                     <TextField
                        placeholder={'Ваша почта'}
                        sx={inputValueStyles}
                        {...register('email', { required: true })}
                     />

                     <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        sx={inputValueStyles}
                        fullWidth={true}
                     >
                        Регистрация
                     </Button>
                  </form>
               </FormProvider>
            </Box>
         </Box>
      </ThemeProvider>
   );
};
