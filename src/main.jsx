import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Explorer from './pages/Explorer';
import RecipeCreationTool from './pages/RecipeCreationTool';
import SavedRecipes from './pages/SavedRecipes';
import UserRecipes from './pages/UserRecipes';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Register />,
  },
  {
    path: '/signin',
    element: <Login />,
  },
  {
    path: '/',
    element: <Feed />,
  },
  {
    path: '/explorer',
    element: <Explorer />,
  },
  {
    path: '/:user/recipe_creation_tool',
    element: <RecipeCreationTool />,
  },
  {
    path: '/:user/saved',
    element: <SavedRecipes />,
  },
  {
    path: '/:user/recipes',
    element: <UserRecipes />,
  },
  {
    path: '/:user',
    element: <Profile />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
