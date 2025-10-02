import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

export const toolbarContainer: SxProps<Theme> = {
   display: 'flex',
   justifyContent: 'space-between',
};

export const headerTypography: SxProps<Theme> = {
   display: 'flex',
   flexDirection: 'row',
   gap: '10px',
};

export const companyNameContainer: SxProps<Theme> = {
   fontWeight: '700',
   fontSize: '20px',
};

export const accountIconContainer: SxProps<Theme> = {
   mt: '2px',
};

export const buttonMarginContainer: SxProps<Theme> = {
   mr: '20px',
   backgroundColor: 'white',
   color: 'black',
   boxShadow: 'none',
};

export const logOutButtonContainer: SxProps<Theme> = {
   backgroundColor: 'white',
   color: 'black',
   mr: '10px',
};
