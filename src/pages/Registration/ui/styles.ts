import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

export const parentStyles: SxProps<Theme> = {
   display: 'flex',
   height: '100%',
   width: '100%',
   flexDirection: 'column',
   alignItems: 'center',
};

export const authFormStyles: SxProps<Theme> = {
   display: 'flex',
   marginTop: '1.5%',
   width: '90%',
   height: '80%',
   backgroundColor: '#b8e093',
   borderRadius: '5%',
   flexDirection: 'column',
   alignItems: 'center',
   position: 'absolute',
};

export const greetingTextStyles: SxProps<Theme> = {
   fontSize: '90px',
};

export const formStyles: React.CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   position: 'relative',
   width: '90%',
   height: '80%',
   alignItems: 'center',
};

export const inputNameStyles: SxProps<Theme> = {
   marginTop: '100px',
   width: '30%',
   height: '6%',
   border: '1px solid',
};

export const inputSurnameStyles: SxProps<Theme> = {
   marginTop: '50px',
   width: '30%',
   height: '6%',
   border: '1px solid',
};

export const inputEmailStyles: SxProps<Theme> = {
   marginTop: '50px',
   width: '30%',
   height: '6%',
   border: '1px solid',
};

export const authButtonStyles: SxProps<Theme> = {
   width: '95%',
   height: '5%',
   display: 'flex',
   borderRadius: '20px',
   backgroundColor: '#8ec95a',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: 'auto',
   marginBottom: '2%',
};
