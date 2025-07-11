import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { WishListProvider } from './context/WishListContext';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WishListProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WishListProvider>
  </React.StrictMode>
);
