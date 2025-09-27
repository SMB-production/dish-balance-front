import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../../shared/privateRoute';
import { MainPage } from '../../pages/MainPage';
import { RegistrationPage } from '../../pages/Registration';
import { LogInPage } from '../../pages/LogInPage';

export const AppRoutes = () => {
   return (
      <Routes>
         <Route
            path='/'
            element={
               <PrivateRoute>
                  {' '}
                  <MainPage />{' '}
               </PrivateRoute>
            }
         />
         <Route path='/registration' element={<RegistrationPage />} />
         <Route path='/login' element={<LogInPage />} />
      </Routes>
   );
};
