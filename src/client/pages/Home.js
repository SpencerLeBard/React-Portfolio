import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import background from "../Assets/largecubbybackground.jpg";
import logo from "../Assets/SLlogov2.png";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open and close modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Logo positioned on the far left of the screen */}
      <img
        src={logo}
        alt="Website Logo"
        className="absolute top-6 left-0 h-12 w-12 ml-4"
      />

      {/* Header */}
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
          >
            <Link
              className="lock sm:inline-block px-4 py-2 text-lg font-medium text-black no-underline hover:text-gray-300 transition duration-200"
              to="/"
            >
              Home
            </Link>
            <Link
              className="lock sm:inline-block px-4 py-2 text-lg font-medium text-black no-underline hover:text-gray-300 transition duration-200"
              to="/Portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="lock sm:inline-block px-4 py-2 text-lg font-medium text-black no-underline hover:text-gray-300 transition duration-200"
              to="/Blogs"
            >
              Blog
            </Link>
            <Link
              className="lock sm:inline-block px-4 py-2 text-lg font-medium text-black no-underline hover:text-gray-300 transition duration-200"
              to="/ContactMe"
            >
              Contact Me
            </Link>
          </nav>

          {/* Login Button */}
          <button
            onClick={openModal}
            className="border border-gray-200 rounded hover:bg-gray-700 hover:text-white transition duration-300 sm:inline-block px-4 py-2 text-lg font-medium text-gray-200 no-underline hover:text-gray-300"
          >
            Login
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div
        className="flex-grow flex flex-col"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero Section */}
        <section
          className={`hero-section flex-grow flex items-center justify-center py-20 ${
            menuOpen ? "mt-20" : ""
          }`}
        >
          <div className="container mx-auto text-center bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
              Welcome to My Professional Portfolio
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Explore my work, read my latest blogs, and let's collaborate to
              create meaningful software solutions together.
            </p>
            <Link
              to="/Portfolio"
              className="inline-block bg-gray-600 text-gray-200 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 font-medium no-underline"
            >
              View My Work
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 bg-white text-black"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 bg-white text-black"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400 text-black"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 text-black"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
