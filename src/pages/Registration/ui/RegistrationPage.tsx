import Box from '@mui/material/Box';

export const RegistrationPage = () => {
   return (
      <Box
         component='div'
         sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            height: '70%',
            width: '80%',
            borderRadius: '20px',
            backgroundColor: '#bfd2b5',
         }}
      >
         This Box renders as an HTML section element.
         <Box
            component='div'
            sx={{
               color: 'white',
               backgroundColor: '#5f9b4a',
               position: 'absolute',
               marginLeft: 'auto',
               marginRight: 'auto',
               left: '0',
               right: '0',
               textAlign: 'center',
               borderRadius: '10px',
               height: '50px',
               verticalAlign: 'middle',
               lineHeight: '45px',
            }}
         >
            РЕГИСТРАЦИЯ
         </Box>
      </Box>
   );
};
