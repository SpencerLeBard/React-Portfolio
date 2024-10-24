import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
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

      {/* HERO SECTION */}
      <section className="hero-section flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to My Professional Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover my projects, read my blog posts, and get in touch. I am a
            passionate software developer focused on creating impactful and
            innovative solutions.
          </p>
          <Link
            to="/Portfolio"
            className="inline-block bg-blue-600 text-gray-200 px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            View My Work
          </Link>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <Footer />
      {/* <footer className="bg-gray-800 text-gray-200 py-6 mt-auto shadow-md">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Spencer LeBard. All rights
            reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
}

export default Home;
