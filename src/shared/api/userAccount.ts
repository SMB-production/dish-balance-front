import { baseAPI } from './api.ts';
import { UserInfo } from '../../pages/UserAccountPage/ui/UserAcount.tsx';

export const getUserInformation = async (): Promise<UserInfo> => {
   const response = await baseAPI.get('auth/profile');
   return response.data;
};
