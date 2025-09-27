import { Navigate, RouteProps } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { getAuthStatus } from '../../api/authStatus.ts';
import { CircularProgress } from '@mui/material';

type PrivateRouteProps = RouteProps;

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
   const [isAuth, setIsAuth] = useState(false);
   const [isFetch, setIsFetch] = useState(true);

   useEffect(() => {
      const checkAuth = async () => {
         try {
            const responseResult = await getAuthStatus();
            setIsAuth(responseResult);
         } catch (error) {
            console.error('Ошибка авторизации', error);
            setIsAuth(false);
         } finally {
            setIsFetch(false);
         }
      };
      checkAuth();
   }, []);

   if (isFetch) {
      return <CircularProgress color={'primary'} />;
   }

   if (!isAuth) {
      return <Navigate to='login' replace />;
   }
   return <>{children}</>;
};
