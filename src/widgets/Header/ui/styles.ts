import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

export const headerStyles: SxProps<Theme> = {
   backgroundColor: '#b8e093',
   height: '7vh',
   width: '100%',
   display: 'flex',
   justifyContent: 'right',
   alignItems: 'center',
};

export const linkStyles = {
   textDecoration: 'none',
   marginRight: '1%',
   cursor: 'pointer',
};
