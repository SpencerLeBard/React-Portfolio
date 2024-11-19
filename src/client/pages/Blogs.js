import React, { useState } from "react";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import whiteBackground from "../Assets/largecubbybackground.jpg";
import logo from "../Assets/SLlogov2.png";

const Blogs = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Logo positioned on the far left of the screen */}
      <img
        src={logo}
        alt="Website Logo"
        className="absolute top-6 left-0 h-12 w-12 ml-4"
      />

      {/* Header without background */}
      <header className="bg-gray-800 shadow-md py-4 relative z-10">
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
            style={{ zIndex: 9 }}
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
          <Link
            to="/login"
            className="border border-gray-200 rounded hover:bg-gray-700 hover:text-white transition duration-300 lock sm:inline-block px-4 py-2 text-lg font-medium text-black no-underline hover:text-gray-300 transition duration-200"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Main content and Footer with background image */}
      <div
        className="flex-grow flex flex-col"
        style={{
          backgroundImage: `url(${whiteBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main Content */}
        <div
          className={`container mx-auto p-4 flex-grow ${
            menuOpen ? "mt-20" : ""
          }`}
        >
          <h1 className="text-4xl font-bold text-center mb-8">
            Spencer's Blogs
          </h1>
          <BlogList />
        </div>

        {/* Footer with background image */}
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
