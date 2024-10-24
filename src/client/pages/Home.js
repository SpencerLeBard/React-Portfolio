import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold font-mono text-gray-200">
            Spencer LeBard
          </h1>
          <nav className="space-x-8">
            <Link
              className="text-lg font-medium text-black no-underline hover:text-gray-800 transition duration-200"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-lg font-medium text-black no-underline hover:text-gray-800 transition duration-200"
              to="/Portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="text-lg font-medium text-black no-underline hover:text-gray-800 transition duration-200"
              to="/Blogs"
            >
              Blog
            </Link>
            <Link
              className="text-lg font-medium text-black no-underline hover:text-gray-800 transition duration-200"
              to="/ContactMe"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section flex-grow flex items-center justify-center py-20 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
            Welcome to My Professional Portfolio
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Explore my work, read my latest blogs, and let's collaborate to
            create meaningful software solutions together.
          </p>
          <Link
            to="/Portfolio"
            className="inline-block font-medium text-black no-underline px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            View My Work
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
