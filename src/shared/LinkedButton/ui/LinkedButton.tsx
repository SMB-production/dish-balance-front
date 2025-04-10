import { Button, type SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import * as React from 'react';
import { Link } from 'react-router';

interface LinkedButtonProps {
   route: string;
   sx: SxProps<Theme>;
   text: string;
}

export const LinkedButton: React.FC<LinkedButtonProps> = props => {
   return (
      <Button
         component={Link}
         to={props.route}
         variant={'contained'}
         color={'secondary'}
         size={'large'}
         sx={props.sx}
      >
         {props.text}
      </Button>
   );
};
