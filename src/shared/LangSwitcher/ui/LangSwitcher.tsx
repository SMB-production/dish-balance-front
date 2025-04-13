import LanguageIcon from '@mui/icons-material/Language';
import { IconButton } from '@mui/material';
import i18n from 'i18next';

export const LangSwitcher = () => {
   const toggleLanguage = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
   };

   return (
      <IconButton onClick={toggleLanguage}>
         <LanguageIcon />
      </IconButton>
   );
};
