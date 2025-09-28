import { baseAPI } from './api.ts';
import { LoginForm } from '../../pages/LogInPage/ui/LogInPage.tsx';

export const postLoginRequest = async (data: LoginForm) => {
   const response = await baseAPI.post('auth/login', data);
   return response.data;
};
