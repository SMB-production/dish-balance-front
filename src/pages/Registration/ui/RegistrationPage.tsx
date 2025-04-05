import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { FormProvider, type SubmitErrorHandler } from 'react-hook-form';
import { type SubmitHandler, useForm } from 'react-hook-form';
import {
   inputNameStyles,
   parentStyles,
   authFormStyles,
   greetingTextStyles,
   inputSurnameStyles,
   inputEmailStyles,
   authButtonStyles,
   formStyles,
} from './styles.ts';

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
      <Box className='parent-box' component='section' sx={parentStyles}>
         <Box className='auth-form' component='section' sx={authFormStyles}>
            <Box className='greeting-text' component='section' sx={greetingTextStyles}>
               Давайте познакомимся!
            </Box>
            <FormProvider {...methods}>
               <Box sx={formStyles}>
                  <form onSubmit={handleSubmit(handleSubmitForm, handleSubmitFormError)}>
                     <Input
                        placeholder={'Ваше имя'}
                        sx={inputNameStyles}
                        {...register('name', { required: true })}
                        aria-invalid={!!errors.name}
                     ></Input>
                     <Input
                        placeholder={'Ваша фамилия'}
                        sx={inputSurnameStyles}
                        {...register('age', { required: true })}
                     ></Input>
                     <Input
                        placeholder={'Ваша почта'}
                        sx={inputEmailStyles}
                        {...register('email', { required: true })}
                     ></Input>
                     <Button type='submit' sx={authButtonStyles}>
                        Регистрация
                     </Button>
                  </form>
               </Box>
            </FormProvider>
         </Box>
      </Box>
   );
};
