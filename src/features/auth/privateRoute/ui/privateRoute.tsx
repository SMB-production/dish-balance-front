import { Navigate, RouteProps } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { getAuthStatus } from '@features/auth/authStatus/authStatus.ts';
import { CircularProgress } from '@mui/material';

type PrivateRouteProps = RouteProps;

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
   const [isAuth, setIsAuth] = useState(false);
   const [isFetched, setIsFetched] = useState(false);

   useEffect(() => {
      const checkAuth = async () => {
         try {
            const responseResult = await getAuthStatus();
            setIsAuth(responseResult);
         } catch (error) {
            console.error('Ошибка авторизации', error);
            setIsAuth(false);
         } finally {
            setIsFetched(true);
         }
      };
      checkAuth();
   }, []);

   if (!isFetched) {
      return <CircularProgress color={'primary'} />;
   }

   if (!isAuth) {
      return <Navigate to='/login' replace />;
   }
   return <>{children}</>;
};
