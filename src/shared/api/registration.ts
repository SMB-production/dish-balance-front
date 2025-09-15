import { AuthForm } from '../../pages/Registration/ui/RegistrationPage.tsx';
import { baseAPI } from './api.ts';

export const postRegistrationRequest = async (data: AuthForm) => {
   const response = await baseAPI.post('auth/register', data);
   return response.data;
};
