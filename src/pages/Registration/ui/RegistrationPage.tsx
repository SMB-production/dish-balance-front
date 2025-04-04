import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import {
   inputNameStyles,
   parentStyles,
   authFormStyles,
   greetingTextStyles,
   inputSurnameStyles,
   inputEmailStyles,
   authButtonStyles,
} from './styles.ts';

export const RegistrationPage = () => {
   return (
      <Box className='parent-box' component='section' sx={parentStyles}>
         <Box className='auth-form' component='section' sx={authFormStyles}>
            <Box className='greeting-text' component='section' sx={greetingTextStyles}>
               Давайте познакомимся!
            </Box>
            <Input placeholder={'Ваше имя'} sx={inputNameStyles}></Input>
            <Input placeholder={'Ваша фамилия'} sx={inputSurnameStyles}></Input>
            <Input placeholder={'Ваша почта'} sx={inputEmailStyles}></Input>
            <Box component='button' sx={authButtonStyles}>
               Зарегистрироваться!
            </Box>
         </Box>
      </Box>
   );
};
