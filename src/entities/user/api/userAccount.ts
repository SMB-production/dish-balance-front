import { baseAPI } from '@shared/api/api.ts';
import { type UserInfo } from '@entities/user/types/userInfoInterface.ts';

export const getUserInformation = async (): Promise<UserInfo> => {
   const response = await baseAPI.get('auth/profile');
   return response.data;
};
