import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';

type Ingredient = {
   name: string;
   weight: number;
   caloriesPer100g: number;
   proteinPer100g: number;
   fatPer100g: number;
   carbohydratesPer100g: number;
};

type ProductsForm = {
   name: string;
   ingredients: Ingredient[];
};

const POST_PRODUCT_API = 'http://localhost:5000/api/cpfc';

const onSubmitHandler: SubmitHandler<ProductsForm> = data => {
   axios.post(`${POST_PRODUCT_API}`).then(response => {
      console.log(response);
   });
   console.log(data);
};

export const ProductsForm = () => {
   const { register, handleSubmit, control } = useForm<ProductsForm>({
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
   const { fields, remove, append } = useFieldArray<ProductsForm>({ control, name: 'ingredients' });

   return (
      <Box
         sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            mt: '2%',
            justifyContent: 'center',
         }}
      >
         <Box
            sx={{
               display: 'flex',
               height: '80%',
               width: '90%',
               borderRadius: '10px',
               backgroundColor: '#b8e093',
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            <form onSubmit={handleSubmit(onSubmitHandler)}>
               <TextField
                  {...register('name')}
                  sx={{ display: 'block' }}
                  placeholder={'Введите название блюда'}
               />
               {fields.map((item, index) => {
                  return (
                     <Box key={item.id}>
                        <TextField
                           placeholder='Введите название ингредиента'
                           {...register(`ingredients.${index}.name`)}
                           sx={{ display: 'block', mt: '10px' }}
                        />

                        <TextField
                           type={'number'}
                           placeholder='Введите вес ингредиента'
                           {...register(`ingredients.${index}.weight`)}
                           sx={{ display: 'block', mt: '10px' }}
                        />

                        <TextField
                           type={'number'}
                           placeholder='Введите калории ингредиента'
                           {...register(`ingredients.${index}.caloriesPer100g`)}
                           sx={{ display: 'block', mt: '10px' }}
                        />

                        <TextField
                           type={'number'}
                           placeholder='Введите белки ингредиента'
                           {...register(`ingredients.${index}.proteinPer100g`)}
                           sx={{ display: 'block', mt: '10px' }}
                        />

                        <TextField
                           type={'number'}
                           placeholder='Введите белки ингредиента'
                           {...register(`ingredients.${index}.fatPer100g`)}
                           sx={{ display: 'block', mt: '10px' }}
                        />

                        <TextField
                           type={'number'}
                           placeholder='Введите углеводы ингредиента'
                           {...register(`ingredients.${index}.carbohydratesPer100g`)}
                           sx={{ display: 'block', mt: '10px' }}
                        />

                        <Button
                           type='button'
                           onClick={() => remove(index)}
                           variant={'contained'}
                           sx={{ display: 'block', mb: '10px' }}
                        >
                           Delete
                        </Button>
                     </Box>
                  );
               })}

               <Button
                  type={'button'}
                  variant={'contained'}
                  sx={{ display: 'block' }}
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

               <Button type={'submit'} variant={'contained'} sx={{ display: 'block', mt: '10px' }}>
                  Отправить
               </Button>
            </form>
         </Box>
      </Box>
   );
};
