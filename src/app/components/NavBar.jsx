
import React from 'react';

const NavBar = () => {
  return (
   <nav className="absolute left-0 top-0 z-10 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            FLOWLY
          </a>
  
          <div className="flex items-center gap-8">
            <a
              href="#features"
              className="hidden text-sm font-medium text-gray-600 transition hover:text-gray-900 sm:block"
            >
              Features
            </a>
  
            <a
              href="#contact"
              className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;

