import { baseAPI } from '@shared/api/api.ts';
import { type LoginForm } from '@features/auth/login/loginFormInterface/loginFormInterface.ts';

export const postLoginRequest = async (data: LoginForm) => {
   const response = await baseAPI.post('auth/login', data);
   return response.data;
};
