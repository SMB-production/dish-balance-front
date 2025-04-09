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
   backgroundColor: '#c9f4a2',
   borderRadius: '5%',
   flexDirection: 'column',
   alignItems: 'center',
   position: 'absolute',
   '& form': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: '90%',
      height: '80%',
      alignItems: 'center',
   },
};

export const greetingTextStyles: SxProps<Theme> = {
   fontSize: '90px',
};

export const inputValueStyles: SxProps<Theme> = {
   mt: '50px',
};
