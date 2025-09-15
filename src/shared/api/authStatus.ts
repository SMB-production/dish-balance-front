import { baseAPI } from './api.ts';

export const getAuthStatus = async () => {
   const response = await baseAPI.get('/auth/isAuth', {
      withCredentials: true,
   });
   return response.data.isAuthenticated;
};
