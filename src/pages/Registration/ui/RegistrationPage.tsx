import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { FormProvider } from 'react-hook-form';
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
         age: 18,
      },
   });
   const { register, handleSubmit } = methods;

   const submit: SubmitHandler<AuthForm> = data => {
      console.log(data);
   };

   return (
      <Box className='parent-box' component='section' sx={parentStyles}>
         <Box className='auth-form' component='section' sx={authFormStyles}>
            <Box className='greeting-text' component='section' sx={greetingTextStyles}>
               Давайте познакомимся!
            </Box>
            <FormProvider {...methods}>
               <form onSubmit={handleSubmit(submit)} style={formStyles}>
                  <Input
                     placeholder={'Ваше имя'}
                     sx={inputNameStyles}
                     {...register('name')}
                  ></Input>
                  <Input
                     placeholder={'Ваша фамилия'}
                     sx={inputSurnameStyles}
                     {...register('age')}
                  ></Input>
                  <Input
                     placeholder={'Ваша почта'}
                     sx={inputEmailStyles}
                     {...register('email')}
                  ></Input>
                  <Button type='submit' sx={authButtonStyles}>
                     Регистрация
                  </Button>
               </form>
            </FormProvider>
         </Box>
      </Box>
   );
};
