import Box from '@mui/material/Box';
import {
   cpfcForm,
   cpfcFormContainer,
   dishesFormContainer,
   dishListContainer,
   greetingTextAndGraphContainer,
   greetingTextContainer,
   headerContainer,
   mainPageParentContainer,
   ringGraphContainer,
} from './styles.ts';
import { Header } from '../../../widgets/Header';
import { Button, TextField, Typography } from '@mui/material';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';

export const MainPage = () => {
   return (
      <Box component={'div'} className='mainPageParentContainer' sx={mainPageParentContainer}>
         <Box className='dishesFormContainer' sx={dishesFormContainer}>
            <Box className='headerContainer' sx={headerContainer}>
               <Header />
            </Box>
            <Box className='greetingTextAndGraphContainer' sx={greetingTextAndGraphContainer}>
               <Typography className='greetingTextContainer' sx={greetingTextContainer}>
                  Cледи за своим питанием
                  <br /> легко и удобно!
               </Typography>
               <Box className='ringGraphContainer' sx={ringGraphContainer}>
                  <DataSaverOffIcon fontSize='large' />
               </Box>
            </Box>

            <Box className='cpfcFormContainer' sx={cpfcFormContainer}>
               <Typography fontSize='25px' sx={{ mb: '20px', fontWeight: '600' }}>
                  Добавьте свое блюдо
               </Typography>
               <Box className='cpfcForm' sx={cpfcForm}>
                  <TextField id='outlined-helperText' label='Название блюда' />
                  <TextField id='outlined-helperText' label='Белки (Б)' />
                  <TextField id='outlined-helperText' label='Жиры (Ж)' />
                  <TextField id='outlined-helperText' label='Углеводы (У)' />
                  <TextField id='outlined-helperText' label='Калории (К)' />

                  <Button variant='contained' sx={{ fontSize: '18px' }}>
                     Добавить блюдо
                  </Button>
               </Box>
            </Box>

            <Box className='dishListContainer' sx={dishListContainer}>
               <Box>Список продуктов</Box>
            </Box>
         </Box>
      </Box>
   );
};
