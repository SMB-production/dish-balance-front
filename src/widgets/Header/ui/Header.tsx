import { Link } from 'react-router-dom';

export const Header = () => {
   return (
      <header
         style={{
            backgroundColor: '#c2d7c2',
            height: '10vh',
            width: "100vw",
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center'
         }}
      >  
         <Link
            to='/'
            style={{
               verticalAlign: 'middle',
               margin: '10px',
               textDecoration: 'none',
               fontSize: '20px'
            }}
         >
            На главную
         </Link>
         <Link
            to='/registration'
            style={{
               verticalAlign:'middle',
               margin: '10px',
               textDecoration: 'none',
               fontSize: '20px'
            }}
         >
            Регистрация
         </Link>
      </header>
   );
};
