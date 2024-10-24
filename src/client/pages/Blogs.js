import React from "react";
import BlogList from "../components/BlogList";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/*TODO CREATE HEADER COMPONENT <Header /> */}
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

      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Spencer's Blog
        </h1>
        <BlogList />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
