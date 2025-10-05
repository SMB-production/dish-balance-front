import { baseAPI } from '@shared/api/api.ts';

export const postLogoutRequest = async () => {
   const response = baseAPI.post('auth/logout');
   console.log('Logout success', response);
};
