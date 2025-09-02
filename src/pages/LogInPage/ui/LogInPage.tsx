import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import {
   greetingContainer,
   greetingFormContainer,
   greetingPhotoContainer,
   inputFieldsContainer,
   parentBoxContainer,
} from './styles.ts';

export const LogInPage = () => {
   return (
      <Box className='parentBoxContainer' sx={parentBoxContainer}>
         <Box className='greetingContainer' sx={greetingContainer}>
            <Box className='greetingPhotoContainer' sx={greetingPhotoContainer}>
               <img
                  src='../../../../public/icons/LogInPage_photo_phone.png'
                  alt='Phone'
                  style={{ display: 'block', height: '100%' }}
               />
            </Box>
            <Box className='greetingFormContainer' sx={greetingFormContainer}>
               <Box className='greetingTextContainer'>
                  <Typography
                     variant='h1'
                     sx={{ fontSize: '60px', fontWeight: '500', mb: '100px' }}
                  >
                     Ваш путь к здоровому питанию!
                  </Typography>
               </Box>
               <Box className='inputFieldsContainer' sx={inputFieldsContainer}>
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
