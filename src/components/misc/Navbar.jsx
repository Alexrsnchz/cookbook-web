import {
  LightThemeIcon,
  NotificationsIcon,
  SearchIcon,
} from '../../assets/Icons';
import logo from '../../assets/images/logo.svg';

function Navbar() {
  return (
    <nav className="sticky top-0 py-3 z-10 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center flex-none">
          <img className="h-8 w-auto sm:h-10" src={logo} alt="Logo" />
        </div>

        {/* Barra de búsqueda */}
        <div className="hidden sm:flex flex-1 justify-center mx-4">
          <div className="relative w-full max-w-lg lg:max-w-3xl">
            <input
              className="search-cancel:hidden w-full rounded-full bg-gray-100 border border-gray-300 pl-12 pr-4 py-2.5 text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
              id="search"
              name="search"
              type="search"
              placeholder="Buscar recetas..."
            />
            <div className="absolute inset-y-0 left-4 flex items-center text-gray-600">
              <SearchIcon />
            </div>
          </div>
        </div>

        {/* Íconos y perfil */}
        <div className="flex items-center space-x-4 sm:space-x-6 flex-none">
          <LightThemeIcon className="sm:w-6 sm:h-6 text-gray-600 hover:text-gray-800" />
          <NotificationsIcon className="sm:w-6 sm:h-6 text-gray-600 hover:text-gray-800" />
          <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gray-600"></div>
        </div>
      </div>

      {/* Barra de búsqueda visible en móviles */}
      <div className="sm:hidden px-4 mt-3">
        <div className="relative">
          <input
            className="w-full rounded-full bg-gray-100 border border-gray-300 pl-12 pr-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            id="search-mobile"
            name="search-mobile"
            type="search"
            placeholder="Buscar recetas..."
          />
          <div className="absolute inset-y-0 left-4 flex items-center">
            <SearchIcon className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
