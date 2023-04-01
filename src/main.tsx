import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Hooks from './pages/1-hooks';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';
import Home from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/1-hooks/1-useState',
    element: <Hooks.useState />
  },
  {
    path: '/1-hooks/2-useEffect',
    element: <Hooks.useEffect />
  },
  {
    path: '/1-hooks/3',
    element: <Hooks.UseCallback />
  },
  {
    path: '/1-hooks/4',
    element: <Hooks.UseMemo />
  },
  {
    path: '/1-hooks/5',
    element: <Hooks.useRef />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
