import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/SLlogov2.png";

function Header({ openModal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-md py-4 relative z-10">
      {/* Logo positioned on the far left */}
      <img
        src={logo}
        alt="Website Logo"
        className="absolute top-6 left-0 h-12 w-12 ml-4"
      />

      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold font-mono text-gray-200">
          Spencer LeBard
        </h1>

        {/* Mobile menu toggle button */}
        <button
          className="sm:hidden text-gray-200 hover:text-gray-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.707 5.293a1 1 0 00-1.414 0L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414l5.293 5.293-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414l-5.293-5.293 5.293-5.293a1 1 0 000-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full bg-gray-800 border-t border-black sm:relative sm:flex sm:items-center sm:space-x-8 sm:bg-transparent sm:border-none sm:w-auto`}
        >
          <Link
            className="block sm:inline-block px-4 py-2 text-lg font-medium text-black no-underline hover:text-gray-300 transition duration-200"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block sm:inline-block px-4 py-2 text-lg font-medium text-black no-underline hover:text-gray-300 transition duration-200"
            to="/Portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="block sm:inline-block px-4 py-2 text-lg font-medium text-black no-underline hover:text-gray-300 transition duration-200"
            to="/Blogs"
          >
            Blog
          </Link>
          <Link
            className="block sm:inline-block px-4 py-2 text-lg font-medium text-black no-underline hover:text-gray-300 transition duration-200
"
            to="/ContactMe"
          >
            Contact Me
          </Link>
        </nav>

        {/* Login Button */}
        <button
          onClick={openModal} // Use the openModal function passed as a prop
          className="border border-gray-200 rounded hover:bg-gray-700 hover:text-white transition duration-300 sm:inline-block px-4 py-2 text-lg font-medium text-gray-200 no-underline hover:text-gray-300"
        >
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
