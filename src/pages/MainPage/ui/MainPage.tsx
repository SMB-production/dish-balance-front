import { useTranslation } from 'react-i18next';

export const MainPage = () => {
   const { t } = useTranslation('main');

   return <div>{t('Это главная страница')};</div>;
};
