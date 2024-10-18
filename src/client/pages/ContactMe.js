import React from "react";
import backgroundArt from "../Assets/abstract.jpg";
import WhiteBlockContactMe from "../components/WhiteBlockContactMe";
import { Link } from "react-router-dom";

function ContactMe() {
  return (
    <div class="ContactMe">
      <header className="bg-white shadow-md py-4">
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
      <div className="relative">
        <img
          className="w-full max-h-screen w-screen bg-cover"
          src={backgroundArt}
          alt="Background"
        />
      </div>
      <WhiteBlockContactMe />
    </div>
  );
}

export default ContactMe;
