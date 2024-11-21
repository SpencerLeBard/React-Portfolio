import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/SLlogov2.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Open and close modal handlers can be passed as props if needed

  return (
    <header className="bg-gray-800 shadow-md py-4 relative z-10">
      {/* Logo positioned on the far left of the screen */}
      <img
        src={logo}
        alt="Website Logo"
        className="absolute top-6 left-0 h-12 w-12 ml-4"
      />

      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo or Title */}
        <h1 className="text-2xl sm:text-4xl font-bold font-mono text-gray-200">
          Spencer LeBard
        </h1>

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
            className="block sm:inline-block px-4 py-2 text-lg font-medium text-black no-underline hover:text-gray-300 transition duration-200"
            to="/ContactMe"
          >
            Contact Me
          </Link>
        </nav>

        {/* Login Button */}
        <button
          onClick={() => {
            /* handle modal open */
          }}
          className="border border-gray-200 rounded hover:bg-gray-700 hover:text-white transition duration-300 sm:inline-block px-4 py-2 text-lg font-medium text-gray-200 no-underline hover:text-gray-300"
        >
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
