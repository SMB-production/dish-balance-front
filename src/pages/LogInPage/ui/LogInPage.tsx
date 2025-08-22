import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';

export const LogInPage = () => {
   return (
      <Box className='parentBoxContainer'>
         <Box
            className='iconsBarContainer'
            sx={{ display: 'flex', justifyContent: 'space-between', margin: '15px' }}
         >
            <svg
               xmlns='http://www.w3.org/2000/svg'
               width='50'
               height='50'
               viewBox='0 0 24 24'
               fill='#ffdfc4'
               stroke='currentColor'
               stroke-width='2'
               stroke-linecap='round'
               stroke-linejoin='round'
               className='lucide lucide-biceps-flexed-icon lucide-biceps-flexed'
            >
               <path d='M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1' />
               <path d='M15 14a5 5 0 0 0-7.584 2' />
               <path d='M9.964 6.825C8.019 7.977 9.5 13 8 15' />
            </svg>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               width='50'
               height='50'
               viewBox='0 0 24 24'
               fill='green'
               stroke='currentColor'
               stroke-width='2'
               stroke-linecap='round'
               stroke-linejoin='round'
               className='lucide lucide-apple-icon lucide-apple'
            >
               <path d='M12 6.528V3a1 1 0 0 1 1-1h0' />
               <path d='M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21' />
            </svg>
         </Box>
         <Box className='greetingContainer' sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box
               className='greetingPhotoContainer'
               sx={{
                  display: 'flex',
                  height: '80vh',
                  width: '50%',
                  ml: '20px',
                  justifyContent: 'center',
               }}
            >
               <img
                  src='../../../../public/LogInPage_photo_phone.png'
                  alt='Phone'
                  style={{ display: 'block', height: '100%' }}
               />
            </Box>
            <Box
               className='greetimgFormContainer'
               sx={{
                  display: 'flex',
                  width: '50%',
                  margin: '0px 20px 0px 20px',
                  backgroundColor: 'white',
                  flexDirection: 'column',
               }}
            >
               <Box className='greetimgTextContainer'>
                  <Typography
                     variant='h1'
                     sx={{ fontSize: '60px', fontWeight: '500', mb: '100px' }}
                  >
                     Начнем путь к здоровому питанию!
                  </Typography>
               </Box>
               <Box
                  className='inputFieldsContainer'
                  sx={{ display: 'flex', flexDirection: 'column', mr: '115px', gap: '25px' }}
               >
                  <TextField
                     id='outlined-helperText'
                     label='Ваше имя'
                     helperText='Это поле обязательно'
                  />
                  <TextField
                     id='outlined-helperText'
                     label='Ваша почта'
                     helperText='Это поле обязательно'
                  />
                  <TextField
                     id='outlined-helperText'
                     label='Ваша почта'
                     helperText='Это поле обязательно'
                  />
                  <Button variant={'contained'}>Войти</Button>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};
