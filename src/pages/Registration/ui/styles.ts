import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

export const parentRegistrationBoxContainer: SxProps<Theme> = {
   height: '100%',
   pt: '50px',
};

export const greetingRegistrationContainer: SxProps<Theme> = {
   display: 'flex',
   flexDirection: 'row',
};

export const greetingRegistrationPhotoContainer: SxProps<Theme> = {
   display: 'flex',
   height: '80vh',
   width: '50%',
   ml: '20px',
   justifyContent: 'center',
};

export const greetingRegistrationPhoto = {
   display: 'block',
   height: '100%',
};

export const greetingRegistrationFormContainer: SxProps<Theme> = {
   display: 'flex',
   width: '50%',
   margin: '0px 20px 0px 20px',
   flexDirection: 'column',
};

export const greetingRegistrationText = {
   fontSize: '60px',
   fontWeight: '500',
   mb: '50px',
};

export const inputRegistrationFieldsContainer: SxProps<Theme> = {
   display: 'flex',
   flexDirection: 'column',
   mr: '115px',
   gap: '20px',
};

export const bodyCharacteristics: SxProps<Theme> = {
   display: 'flex',
   gap: '10px',
};
