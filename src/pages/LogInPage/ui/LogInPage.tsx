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

export const LogInPage = () => {
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
                     Ваш путь к здоровому питанию!
                  </Typography>
               </Box>
               <Box sx={inputFieldsContainer}>
                  <TextField
                     id='outlined-helperText'
                     label='Ваша почта'
                     helperText='Это поле обязательно'
                  />
                  <TextField
                     id='outlined-helperText'
                     label='Ваш пароль'
                     helperText='Это поле обязательно'
                  />
                  <Button variant={'contained'}>Войти</Button>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};
