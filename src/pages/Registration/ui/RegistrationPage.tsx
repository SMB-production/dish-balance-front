import Box from '@mui/material/Box';

export const RegistrationPage = () => {
   return (
   
   <Box className='parent-box' component="section" sx={{
      display: "flex",
      width: "100vw",
      height: "100vh",
      flexDirection: "column",
      alignItems: "center",
   }}>
      <Box component="section" sx={{ 
         display: "flex",
          position: 'absolute',
         
         width: "90vw",
         height: "80vh",
         
         marginTop: "1%",
         backgroundColor: "#c2d7c2",
         borderRadius: "40px"
       }}>
      This Box renders as an HTML section element.
      </Box>
    </Box>
      
   );
}
