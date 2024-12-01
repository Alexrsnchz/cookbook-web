import { NavLink } from 'react-router-dom';
import {
  AddRecipeIcon,
  CompassIcon,
  HomeIcon,
  RecipesIcon,
  SavedRecipesIcon,
} from '../../assets/Icons';

function Toolbar() {
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-10">
      <div className="bg-white shadow-xl rounded-full px-6 py-2 flex items-center space-x-4 sm:space-x-6 md:px-10 md:space-x-6">
        <button className="text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full p-2 md:p-3 transition-colors">
          <NavLink to="/">
            <HomeIcon />
          </NavLink>
        </button>
        <button className="text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full p-2 md:p-3 transition-colors">
          <NavLink to="/explore">
            <CompassIcon />
          </NavLink>
        </button>
        <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white shadow-md transition-transform transform hover:scale-105">
          <NavLink to="add_recipe">
            <AddRecipeIcon />
          </NavLink>
        </button>
        <button className="text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full p-2 md:p-3 transition-colors">
          <NavLink to=":user/saved">
            <SavedRecipesIcon />
          </NavLink>
        </button>
        <button className="text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full p-2 md:p-3 transition-colors">
          <NavLink to=":user/recipes">
            <RecipesIcon />
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
