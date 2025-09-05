import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

export const mainPageParentContainer: SxProps<Theme> = {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   minHeight: '100%',
   backgroundImage: 'url(/icons/vegetables_background.png)',
   backgroundSize: 'cover',
   padding: '50px 100px 10px 100px',
   backgroundRepeat: 'repeat',
};

export const dishesFormContainer: SxProps<Theme> = {
   display: 'grid',
   width: '100%',
   height: '100%',
   gridTemplateColumns: '1fr 1fr',
   gridTemplateRows: '64px 140px auto ',
   gap: '10px',
   background:
      'linear-gradient(to bottom, #ffffff 0%, #ffffff 10%, rgba(255, 255, 255, 0.6) 28%, rgba(255, 255, 255, 0.1) 100%)',
   backdropFilter: 'blur(9px)',
   borderRadius: '15px',
   padding: '0px 50px 40px 50px',
};

export const headerContainer: SxProps<Theme> = {
   gridColumn: 'span 2',
   height: '64px',
   pt: '10px',
};

export const greetingTextAndGraphContainer: SxProps<Theme> = {
   display: 'flex',
   justifyContent: 'space-between',
   padding: '0px 20px 0px 20px',
   gridColumn: 'span 2',
   gap: '10px',
};

export const greetingTextContainer: SxProps<Theme> = {
   flex: '1',
   fontSize: '55px',
   color: 'black',
};

export const ringGraphContainer: SxProps<Theme> = {
   width: '140px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
};

export const cpfcFormContainer: SxProps<Theme> = {
   display: 'flex',
   flexDirection: 'column',
   padding: '20px',
   backgroundColor: 'white',
   mt: '15px',
   borderRadius: '20px',
};

export const addYourDishTypography = {
   mb: '20px',
   fontWeight: '600',
   fontSize: '25px',
};

export const cpfcForm: SxProps<Theme> = {
   display: 'flex',
   flexDirection: 'column',
   gap: '20px',
};

export const dishListContainer: SxProps<Theme> = {
   backgroundColor: 'white',
   mt: '15px',
   borderRadius: '20px',
   minHeight: '90%',
};
