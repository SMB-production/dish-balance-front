import { Box, Typography } from '@mui/material';
import {
   CpfcParentBox,
   CpfcResonseWindow,
   CpfcTypographyBox,
} from '../../CalculateCpfcWindow/ui/styles.ts';
import type { cpfcFormType } from '../../../shared/globalTypes/cpfcFormTypes/cpfcFormTypes.ts';

export const CalculateCpfcWindow = ({ cpfcObject }: { cpfcObject: cpfcFormType | null }) => {
   return (
      <Box sx={CpfcParentBox}>
         <Box sx={CpfcTypographyBox}>
            <Typography>В вашем блюде {cpfcObject?.name} на 100 грамм:</Typography>
         </Box>
         <Box sx={CpfcResonseWindow}>
            <div>{cpfcObject?.cpfc.protein} грамм белка</div>
         </Box>
         <Box sx={CpfcResonseWindow}>
            <div>{cpfcObject?.cpfc.fat} грамм жиров</div>
         </Box>
         <Box sx={CpfcResonseWindow}>
            <div>{cpfcObject?.cpfc.carbohydrates} грамм углеводов</div>
         </Box>
      </Box>
   );
};
