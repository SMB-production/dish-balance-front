import { TextField } from '@mui/material';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputIngredientFormProps {
   type: string;
   characteristic: string;
   index: number;
   name: string;
}

export const InputIngredientForm: React.FC<InputIngredientFormProps> = props => {
   const { register } = useFormContext();

   return (
      <TextField
         type={props.type}
         placeholder={`Введите ${props.characteristic} продукта`}
         sx={{ display: 'block', mt: '10px' }}
         {...register(`ingredients.${props.index}.${props.name}`)}
      />
   );
};
