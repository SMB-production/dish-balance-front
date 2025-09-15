import { useLocation, Navigate } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
import { getAuthStatus } from '../../api/authStatus.ts';

type childrenType = {
   children: ReactNode;
};

export const PrivateRoute = ({ children }: childrenType) => {
   const location = useLocation();
   const [isAuth, setIsAuth] = useState(false);
   useEffect(() => {
      const checkAuth = async () => {
         try {
            const responseResult = await getAuthStatus();
            setIsAuth(responseResult);
         } catch (error) {
            console.error('Ошибка авторизации', error);
            setIsAuth(false);
         }
      };
      checkAuth();
   }, []);

   if (!isAuth) {
      return <Navigate to={'/login'} state={{ from: location }} />;
   }
   return children;
};
