import Box from '@mui/material/Box';

export const RegistrationPage = () => {
   return (
      // <Box
      // component='div'
      // sx={{
      //    backgroundColor: "red",
      //    height:"100%",
      //    width: "100%"
      // }}
      // >
         <Box
         component='div'
         sx={{
            marginTop: "%",
            position: 'absolute',
            height: '80%',
            width: '90%',
            borderRadius: '20px',
            backgroundColor: '#bfd7b5',
         }}
      >
         This Box renders as an HTML section element.
         <Box
            component='div'
            sx={{
               alignItems: "center",
               backgroundColor: '#5f9b4a',
               display: 'flex',
               height:"50px",
               width: "90%",
               borderRadius: "15px"
            }}
         >
            РЕГИСТРАЦИЯ
         </Box>
      </Box>
      // </Box>

      
   );
}
