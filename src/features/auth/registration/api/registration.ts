import { baseAPI } from '@shared/api/api.ts';
import { type AuthForm } from '@features/auth/registration/registrationFormInterface/registrationFormInterface.ts';

export const postRegistrationRequest = async (data: AuthForm) => {
   const response = await baseAPI.post('auth/register', data);
   return response.data;
};
