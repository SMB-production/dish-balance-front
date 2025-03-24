import { Link } from 'react-router-dom';

export const Header = () => {
   return (
      <header
         style={{
            backgroundColor: '#c2d7c2',
            cursor: 'pointer',
         }}
      >
         <Link
            to='/'
            style={{
               margin: '10px',
            }}
         >
            На главную
         </Link>
         <Link
            to='/registration'
            style={{
               margin: '10px',
            }}
         >
            Регистрация
         </Link>
      </header>
   );
};
