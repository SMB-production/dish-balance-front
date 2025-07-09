import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

export const parentBox: SxProps<Theme> = {
   display: 'flex',
   maxHeight: '100%',
   height: 'auto',
   width: '100%',
   mt: '2%',
   justifyContent: 'center',
};

export const productFormStyles: SxProps<Theme> = {
   display: 'flex',
   height: '80%',
   width: '90%',
   borderRadius: '10px',
   backgroundColor: '#b8e093',
   alignItems: 'center',
   justifyContent: 'center',
   pt: '2%',
   pb: '2%',
};

export const deleteButton: SxProps<Theme> = { display: 'block', mb: '10px' };

export const addIngredientButton: SxProps<Theme> = { display: 'block' };

export const submitButton: SxProps<Theme> = { display: 'block', mt: '10px' };
