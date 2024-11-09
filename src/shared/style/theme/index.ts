import { components } from './components.ts';
import { palette } from './palette.ts';
import { shape } from './shape.ts';
import { typography } from './typography.ts';
import { createTheme } from '@mui/material';

export const theme = createTheme({
   components,
   palette,
   shape,
   typography,
});
