import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const userAccountParentContainer: SxProps<Theme> = {
   display: 'flex',
   justifyContent: 'center',
   minHeight: '100%',
   padding: '50px 100px 10px 100px',
   backgroundRepeat: 'repeat',
   background: 'linear-gradient(0deg, #C6F6C6 0%, #E6F9E6 80%, #F9FFFB 100%)',
};

export const userContainer: SxProps<Theme> = {
   display: 'grid',
   width: '100%',
   gridTemplateColumns: '1fr 1fr',
   gridTemplateRows: '64px 100px auto 20px ',
   background:
      'linear-gradient(to bottom, #ffffff 0%, #ffffff 10%, rgba(255, 255, 255, 0.7) 28%, rgba(255, 255, 255, 0.2) 100%)',
   backdropFilter: 'blur(5px)',
   borderRadius: '15px',
   gap: '10px',
   padding: '0px 50px 40px 50px',
};

export const headerContainer: SxProps<Theme> = {
   gridColumn: 'span 2',
   height: '64px',
   pt: '10px',
};

export const greetingTextContainer: SxProps<Theme> = {
   fontSize: '45px',
   mt: '10px',
};

export const editButtonContainer: SxProps<Theme> = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'end',
};

export const userInfoContainer: SxProps<Theme> = {
   display: 'grid',
   width: '100%',
   height: '100%',
   gridTemplateRows: 'repeat(6, 1fr)',
   gridTemplateColumns: '100%',
   gap: '10px',
   padding: '0px 30px 0px 30px',
};

export const userResultsContainer: SxProps<Theme> = {
   display: 'grid',
   gridTemplateRows: '40px auto 100px',
   gap: '10px',
};

export const yourResultsTypographyContainer: SxProps<Theme> = {
   fontSize: '22px',
   fontWeight: 'bold',
};

export const userParams: SxProps<Theme> = {
   display: 'flex',
   border: '1px solid  #e0e1dd',
   borderRadius: '4px',
   height: '50px',
   alignItems: 'center',
   padding: '5px',
};
