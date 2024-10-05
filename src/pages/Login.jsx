import { useState } from 'react';
import {
  AppleIcon,
  EmailIcon,
  FacebookIcon,
  GoogleIcon,
  LoaderIcon,
  PasswordIcon,
  PinterestIcon,
} from '../assets/Icons';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [socialProvider, setSocialProvider] = useState(null);

  const handleSubmit = () => {
    setIsLoading(true);
  };

  const handleSocialLogin = (provider) => {
    setSocialProvider(provider);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-400">
      <div className="rounded-xl bg-white p-12 shadow-lg w-full max-w-md">
        <h1 className="text-center font-semibold text-2xl mb-6">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="font-semibold text-gray-600 block mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-400">
                <EmailIcon />
              </span>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                required
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="font-semibold text-gray-600 block mb-2"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <PasswordIcon />
              </span>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                required
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>

          <div className="text-right mb-6">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
            >
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-gray-800 text-white font-semibold py-2 w-full rounded-lg hover:bg-gray-700 disabled:bg-gray-700 transition duration-300"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="divider my-6 text-center font-semibold text-sm text-gray-500">
          Or continue with
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleSocialLogin('Google')}
            disabled={socialProvider !== null}
            className="border border-gray-300 hover:bg-gray-100 disabled:bg-gray-100 font-semibold text-sm flex items-center justify-center gap-2 rounded-lg py-3 transition duration-300"
          >
            {socialProvider === 'Google' ? (
              <LoaderIcon />
            ) : (
              <>
                <GoogleIcon />
                Google
              </>
            )}
          </button>
          <button
            onClick={() => handleSocialLogin('Facebook')}
            disabled={socialProvider !== null}
            className="border border-gray-300 hover:bg-gray-100 disabled:bg-gray-100 font-semibold text-sm flex items-center justify-center gap-2 rounded-lg py-3 transition duration-300"
          >
            {socialProvider === 'Facebook' ? (
              <LoaderIcon />
            ) : (
              <>
                <FacebookIcon />
                Facebook
              </>
            )}
          </button>
          <button
            onClick={() => handleSocialLogin('Pinterest')}
            disabled={socialProvider !== null}
            className="border border-gray-300 hover:bg-gray-100 disabled:bg-gray-100 font-semibold text-sm flex items-center justify-center gap-2 rounded-lg py-3 transition duration-300"
          >
            {socialProvider === 'Pinterest' ? (
              <LoaderIcon />
            ) : (
              <>
                <PinterestIcon />
                Pinterest
              </>
            )}
          </button>
          <button
            onClick={() => handleSocialLogin('Apple')}
            disabled={socialProvider !== null}
            className="border border-gray-300 hover:bg-gray-100 disabled:bg-gray-100 font-semibold text-sm flex items-center justify-center gap-2 rounded-lg py-3 transition duration-300"
          >
            {socialProvider === 'Apple' ? (
              <LoaderIcon />
            ) : (
              <>
                <AppleIcon />
                Apple
              </>
            )}
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 font-semibold">
            Don’t have an account?{' '}
            <a href="#" className="text-gray-800 font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
