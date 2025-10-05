import { IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
   const { i18n } = useTranslation('main');

   const handleChangeLanguage = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
   };

   return (
      <IconButton onClick={handleChangeLanguage}>
         <LanguageIcon />
      </IconButton>
   );
};
