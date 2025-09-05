import Box from '@mui/material/Box';
import {
   addYourDishTypography,
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
      <Box sx={mainPageParentContainer}>
         <Box sx={dishesFormContainer}>
            <Box sx={headerContainer}>
               <Header />
            </Box>
            <Box sx={greetingTextAndGraphContainer}>
               <Typography sx={greetingTextContainer}>
                  Cледи за своим питанием
                  <br /> легко и удобно!
               </Typography>
               <Box sx={ringGraphContainer}>
                  <DataSaverOffIcon fontSize='large' />
               </Box>
            </Box>

            <Box sx={cpfcFormContainer}>
               <Typography sx={addYourDishTypography}>Добавьте свое блюдо</Typography>
               <Box sx={cpfcForm}>
                  <TextField label='Название блюда' />
                  <TextField label='Белки (Б)' />
                  <TextField label='Жиры (Ж)' />
                  <TextField label='Углеводы (У)' />
                  <TextField label='Калории (К)' />

                  <Button variant='contained' sx={{ fontSize: '18px' }}>
                     Добавить блюдо
                  </Button>
               </Box>
            </Box>

            <Box sx={dishListContainer}>
               <Box>Список продуктов</Box>
            </Box>
         </Box>
      </Box>
   );
};
