import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { FavoriteContextProvider } from './store/favorite-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoriteContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoriteContextProvider>
);