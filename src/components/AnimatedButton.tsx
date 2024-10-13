import React from 'react';

const AnimatedButton = () => {
  return (
    <div className="relative">
      <button
        className="relative flex items-center gap-2 px-10 py-5 text-lg  text-black dark:text-white bg-primary dark:bg-primaryDark rounded-full shadow-[0_0_0_2px] shadow-primary cursor-pointer overflow-hidden transition-all duration-600 ease-\[cubic-bezier\(0.23,1,0.32,1\)\] hover:bg-secondary hover:text-black dark:hover:text-white hover:shadow-[0_0_0_12px_transparent] hover:rounded-xl active:scale-95 active:shadow-[0_0_0_4px] focus:outline-none focus:ring focus:ring-offset-2 focus:ring-secondary"
        aria-label="Inscribite en nuestros cursos"
        role="button"
      >
        <svg
          viewBox="0 0 24 24"
          className="absolute left-[-25%] w-6 fill-black dark:fill-black transition-all duration-800 ease-\[cubic-bezier\(0.23,1,0.32,1\)\]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        <span className="text-black relative z-10 translate-x-[-12px] transition-all duration-800 ease-\[cubic-bezier\(0.23,1,0.32,1\)\]">
          INSCRIBITE
        </span>
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-5 h-5 bg-black dark:bg-white rounded-full opacity-0 transition-all duration-800 ease-\[cubic-bezier\(0.23,1,0.32,1\)\]"></span>
        <svg
          viewBox="0 0 24 24"
          className="absolute right-4 w-6 fill-black dark:fill-black transition-all duration-800 ease-\[cubic-bezier\(0.23,1,0.32,1\)\]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default AnimatedButton;
