import React from "react";
import backgroundArt from "../Assets/abstract.jpg";
import { Link } from "react-router-dom";

function ContactMe() {
  return (
    <div className="ContactMe">
      {/* Header */}
      <header className="bg-white shadow-md py-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold font-mono text-black">
            Spencer LeBard
          </h1>
          <nav className="space-x-8">
            <Link
              className="text-lg font-medium text-gray-800 hover:text-blue-600"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-lg font-medium text-gray-800 hover:text-blue-600"
              to="/Portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="text-lg font-medium text-gray-800 hover:text-blue-600"
              to="/Blogs"
            >
              Blog
            </Link>
            <Link
              className="text-lg font-medium text-gray-800 hover:text-blue-600"
              to="/ContactMe"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </header>

      {/* Background Image and Contact Info */}
      <div className="relative h-screen">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundArt}
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
  );
}

export default ContactMe;
