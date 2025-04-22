import { TextField, ThemeProvider, Button, Typography } from '@mui/material';
import { type SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { theme } from '../../../shared/style/theme';

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

export const ProductsForm = () => {
   const { register, handleSubmit, control, reset } = useForm<ProductsForm>({
      mode: 'onChange',
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
   const { fields, remove } = useFieldArray<ProductsForm>({ name: 'ingredients', control });

   const handleSubmitForm: SubmitHandler<ProductsForm> = data => {
      console.log(data);
      reset();
   };

   return (
      <ThemeProvider theme={theme}>
         <form onSubmit={handleSubmit(handleSubmitForm)}>
            {fields.map((item, index) => {
               return (
                  <section key={item.id}>
                     <Typography>Название</Typography>
                     <TextField {...register(`ingredients.${index}.name`, { required: true })} />

                     <Typography>Вес</Typography>
                     <TextField
                        type={'number'}
                        {...register(`ingredients.${index}.weight`, { required: true })}
                     />

                     <Button type='button' variant={'contained'} onClick={() => remove(index)}>
                        Delete
                     </Button>
                  </section>
               );
            })}
            <Button type={'submit'} variant={'contained'}>
               Отправит
            </Button>
         </form>
      </ThemeProvider>
   );
};
