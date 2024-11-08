import React, { useState } from "react";
import background from "../Assets/largecubbybackground.jpg";
import { Link } from "react-router-dom";

function ContactMe() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="ContactMe min-h-screen flex flex-col">
      {/* Header without background */}
      <header className="bg-gray-800 shadow-md py-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl sm:text-4xl font-bold font-mono text-gray-200">
            Spencer LeBard
          </h1>
          {/* Mobile menu button */}
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
        </div>
      </header>

      {/* Main content and footer with white background */}
      <div
        className="flex-grow flex flex-col"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Contact Info Section with Specific Background */}
        <div className={`relative h-screen ${menuOpen ? "mt-20" : ""}`}>
          {/* Background Art for Contact Section */}
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={background}
            alt="Background"
          />

          {/* White Box with Contact Info */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-xl">
              <h1 className="text-black text-4xl font-bold font-mono mb-4">
                Spencer LeBard
              </h1>
              <h1 className="text-black text-4xl font-bold font-mono mb-4">
                slebard@gmail.com
              </h1>
              <h1 className="text-black text-4xl font-bold font-mono mb-4">
                <a
                  href="https://github.com/SpencerLeBard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/SpencerLeBard
                </a>
              </h1>
              <h1 className="text-black text-4xl font-bold font-mono">
                <a
                  href="https://linkedin.com/in/spencerlebard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/spencerlebard
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
