import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
