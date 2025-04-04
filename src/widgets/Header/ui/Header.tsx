import { Link } from 'react-router-dom';
import { headerStyles, linkStyles } from './styles.ts';

export const Header = () => {
   return (
      <header style={headerStyles}>
         <Link to='/' style={linkStyles}>
            На главную
         </Link>
         <Link to='/registration' style={linkStyles}>
            Регистрация
         </Link>
      </header>
   );
};
