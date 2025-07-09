export type Ingredient = {
   name: string;
   weight: number;
   caloriesPer100g: number;
   proteinPer100g: number;
   fatPer100g: number;
   carbohydratesPer100g: number;
};

export type CpfcResponse = {
   fat: number;
   protein: number;
   calories: number;
   carbohydrates: number;
   weight: number;
};

export type cpfcFormType = {
   name: string;
   ingredients: Ingredient[];
   cpfc: CpfcResponse;
};
