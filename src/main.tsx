import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import '../src/shared/config/i18next/i18n';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Suspense>
   </StrictMode>,
);
