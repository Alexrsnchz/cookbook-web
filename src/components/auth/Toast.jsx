import { useEffect } from 'react';

const Toast = ({ message, isVisible, setIsVisible }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, setIsVisible]);

  return (
    <div
      className={`fixed top-5 right-5 max-w-xs w-full bg-red-400 text-white px-4 py-3 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <p className="font-semibold">{message}</p>
    </div>
  );
};

export default Toast;
