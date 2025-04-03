import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

export const RegistrationPage = () => {
   return (
      <Box
         className='parent-box'
         component='section'
         sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
         }}
      >
         <Box
            component='section'
            sx={{
               display: 'flex',
               marginTop: '1.5%',
               width: '90%',
               height: '80%',

               backgroundColor: '#b8e093',
               borderRadius: '5%',
               flexDirection: 'column',
               alignItems: 'center',
               position: 'absolute',
            }}
         >
            <Box component='section' sx={{ fontSize: '90px' }}>
               Давайте познакомимся!
            </Box>
            <Input placeholder={'Ваше имя'} sx={{ marginTop: '100px', width: '30%' }}></Input>
            <Input placeholder={'Ваша фамилия'} sx={{ marginTop: '50px', width: '30%' }}></Input>
            <Box
               component='button'
               sx={{
                  width: '95%',
                  height: '5%',
                  display: 'flex',
                  borderRadius: '20px',
                  backgroundColor: '#8ec95a',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 'auto',
                  marginBottom: '2%',
               }}
            >
               Зарегистрироваться!
            </Box>
         </Box>
      </Box>
   );
};
