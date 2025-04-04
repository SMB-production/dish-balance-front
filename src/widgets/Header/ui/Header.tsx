import { Link } from 'react-router-dom';
import { headerStyles } from './styles.ts';

export const Header = () => {
   return (
      <header style={headerStyles}>
         <Link to='/' style={{}}>
            На главную
         </Link>
         <Link to='/registration' style={{}}>
            Регистрация
         </Link>
      </header>
   );
};
