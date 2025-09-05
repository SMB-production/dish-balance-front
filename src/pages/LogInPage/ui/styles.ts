import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

export const parentBoxContainer: SxProps<Theme> = {
   height: '100%',
   pt: '80px',
};

export const greetingContainer: SxProps<Theme> = {
   display: 'flex',
   flexDirection: 'row',
};

export const greetingPhotoContainer: SxProps<Theme> = {
   display: 'flex',
   height: '80vh',
   width: '50%',
   ml: '20px',
   justifyContent: 'center',
};

export const imagePhone = {
   display: 'block',
   height: '100%',
};

export const greetingFormContainer: SxProps<Theme> = {
   display: 'flex',
   width: '50%',
   margin: '0px 30px 0px 20px',
   flexDirection: 'column',
};

export const letsEatHealthyTypography = {
   fontSize: '60px',
   fontWeight: '500',
   mb: '100px',
};

export const inputFieldsContainer: SxProps<Theme> = {
   display: 'flex',
   flexDirection: 'column',
   mr: '115px',
   gap: '25px',
};
