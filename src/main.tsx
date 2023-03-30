import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as Hooks from './pages/1-hooks';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/1-hooks/1-useState',
    element: <Hooks.useState />
  },
  {
    path: '/1-hooks/2-useEffect',
    element: <Hooks.useEffect />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
