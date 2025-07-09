import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { Suspense, useState } from 'react';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { CpfcPostRequest } from '../../../shared/api/productsApi.ts';
import { InputIngredientForm } from '../../../shared/InfutProductForm';
import {
   CpfcParentBox,
   CpfcResonseWindow,
   CpfcTypographyBox,
} from '../../CalculateCpfcWindow/ui/styles.ts';
import {
   addIngredientButton,
   deleteButton,
   parentBox,
   productFormStyles,
   submitButton,
} from './styles.ts';
import type { cpfcFormType } from '../../../shared/globalTypes/cpfcFormTypes/cpfcFormTypes.ts';

export const CpfcProductsForm = () => {
   const [cpfcObject, setCpfcObject] = useState<cpfcFormType | null>(null);

   async function onSubmitHandler(data: cpfcFormType) {
      CpfcPostRequest(data).then(response => {
         setCpfcObject(response.data);
      });
   }

   const methods = useForm<cpfcFormType>({
      defaultValues: {
         name: '',
         ingredients: [
            {
               name: '',
               weight: 0,
               caloriesPer100g: 0,
               proteinPer100g: 0,
               fatPer100g: 0,
               carbohydratesPer100g: 0,
            },
         ],
      },
   });
   const { register, handleSubmit, control } = methods;
   const { fields, remove, append } = useFieldArray<cpfcFormType>({ control, name: 'ingredients' });

   return (
      <Box className={'parentBox'} sx={parentBox}>
         <Box sx={productFormStyles}>
            <FormProvider {...methods}>
               <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <TextField
                     {...register('name')}
                     sx={{ display: 'block' }}
                     placeholder={'Введите название блюда'}
                  />
                  {fields.map((item, index) => {
                     return (
                        <Box key={item.id}>
                           <InputIngredientForm
                              type={'text'}
                              characteristic={'название'}
                              index={index}
                              name={'name'}
                           />

                           <InputIngredientForm
                              type={'number'}
                              characteristic={'вес'}
                              index={index}
                              name={'weight'}
                           />

                           <InputIngredientForm
                              type={'number'}
                              characteristic={'калории'}
                              index={index}
                              name={'caloriesPer100g'}
                           />

                           <InputIngredientForm
                              type={'number'}
                              characteristic={'белки'}
                              index={index}
                              name={'proteinPer100g'}
                           />

                           <InputIngredientForm
                              type={'number'}
                              characteristic={'жиры'}
                              index={index}
                              name={'fatPer100g'}
                           />

                           <InputIngredientForm
                              type={'number'}
                              characteristic={'углеводы'}
                              index={index}
                              name={'carbohydratesPer100g'}
                           />

                           <Button
                              type='button'
                              onClick={() => remove(index)}
                              variant={'contained'}
                              sx={deleteButton}
                           >
                              Delete
                           </Button>
                        </Box>
                     );
                  })}

                  <Button
                     type={'button'}
                     variant={'contained'}
                     sx={addIngredientButton}
                     onClick={() => {
                        append({
                           name: '',
                           weight: 0,
                           caloriesPer100g: 0,
                           proteinPer100g: 0,
                           fatPer100g: 0,
                           carbohydratesPer100g: 0,
                        });
                     }}
                  >
                     Добавить ингредиент
                  </Button>

                  <Button type={'submit'} variant={'contained'} sx={submitButton}>
                     Отправить
                  </Button>
               </form>

               <Suspense>
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
               </Suspense>
            </FormProvider>
         </Box>
      </Box>
   );
};
