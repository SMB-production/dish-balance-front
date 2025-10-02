import { getUserInformation } from '../../../shared/api/userAccount.ts';
import { useEffect, useState } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import { Header } from '../../../widgets/Header';
import Box from '@mui/material/Box';
import {
   editButtonContainer,
   greetingTextContainer,
   headerContainer,
   userAccountParentContainer,
   userContainer,
   userInfoContainer,
   userParams,
   userResultsContainer,
   yourResultsTypographyContainer,
} from './styles.ts';
import { useTranslation } from 'react-i18next';

export interface UserInfo {
   id: string;
   email: string;
   name: string;
   surname: string;
   age: number;
   weight: number;
   height: number;
   sex: string;
   createdAt: string;
   updatedAt: string;
}

export const UserAccount = () => {
   const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
   const [isFetched, setIsFetched] = useState(false);
   const { t } = useTranslation('account');
   useEffect(() => {
      const getUserInfo = async () => {
         try {
            const result = await getUserInformation();
            return setUserInfo(result);
         } catch (error) {
            console.log('Не удалось получить информацию о пользователе: ', error);
         } finally {
            setIsFetched(true);
         }
      };
      getUserInfo();
   }, []);

   if (!isFetched) {
      return <CircularProgress color={'primary'} />;
   }

   return (
      <Box sx={userAccountParentContainer}>
         <Box sx={userContainer}>
            <Box sx={headerContainer}>
               <Header />
            </Box>
            <Typography sx={greetingTextContainer}>
               {t('Привет')}, {userInfo?.name}
            </Typography>
            <Box sx={editButtonContainer}>
               <Button variant={'outlined'} color={'secondary'}>
                  {t('Редактировать')}
               </Button>
            </Box>

            <Box sx={userInfoContainer}>
               <Box>
                  <Typography fontSize='20px' fontWeight='bold'>
                     {t('Имя')}
                  </Typography>
                  <Box sx={userParams}>{userInfo?.name}</Box>
               </Box>
               <Box>
                  <Typography fontSize='20px' fontWeight='bold'>
                     {t('Фамилия')}
                  </Typography>
                  <Box sx={userParams}>{userInfo?.surname}</Box>
               </Box>
               <Box>
                  <Typography fontSize='20px' fontWeight='bold'>
                     {t('Пол')}
                  </Typography>
                  <Box sx={userParams}>
                     {userInfo?.sex ? `${userInfo.sex}` : t('Укажите Ваш пол')}
                  </Box>
               </Box>
               <Box>
                  <Typography fontSize='20px' fontWeight='bold'>
                     {t('Возраст')}
                  </Typography>
                  <Box sx={userParams}>
                     {userInfo?.age ? `${userInfo.age}` : t('Укажите ваш возраст')}
                  </Box>
               </Box>
               <Box>
                  <Typography fontSize='20px' fontWeight='bold'>
                     {t('Рост')}
                  </Typography>
                  <Box sx={userParams}>
                     {userInfo?.height ? `${userInfo.height}` : t('Укажите ваш рост')}
                  </Box>
               </Box>
               <Box>
                  <Typography fontSize='20px' fontWeight='bold'>
                     {t('Вес')}
                  </Typography>
                  <Box sx={userParams}>
                     {userInfo?.weight ? `${userInfo.weight}` : t('Укажите ваш вес')}
                  </Box>
               </Box>
            </Box>
            <Box sx={userResultsContainer}>
               <Typography sx={yourResultsTypographyContainer}>
                  {t('Твои результаты за сегодня')}
               </Typography>
            </Box>
         </Box>
      </Box>
   );
};
