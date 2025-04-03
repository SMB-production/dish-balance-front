import { Link } from 'react-router-dom';

export const Header = () => {
   return (
      <header
         style={{
            backgroundColor: '#b8e093',
            height: '7vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
         }}
      >
         <Link to='/' style={{}}>
            На главную
         </Link>
         <Link to='/registration' style={{}}>
            Регистрация
         </Link>
      </header>
   );
};
