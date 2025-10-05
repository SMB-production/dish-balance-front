import { Button } from '@mui/material';
import { logoutButton } from '@features/auth/logoutButton/ui/styles.ts';
import * as React from 'react';

interface LogoutButtonProps {
   text: string;
   onClick: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = props => {
   return (
      <Button variant={'outlined'} sx={logoutButton} onClick={props.onClick}>
         {props.text}
      </Button>
   );
};
