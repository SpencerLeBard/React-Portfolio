import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import whiteBackground from "../Assets/largecubbybackground.jpg";
import logo from "../Assets/SLlogov2.png";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "PetPal",
      description:
        "Full-stack application that utilizes Humane Society's API data and helps connect homeless animals with people looking to rescue a cat or dog. Ability to save favorite animals and connect with adoption agency.",
      imageUrl:
        "https://raw.githubusercontent.com/SpencerLeBard/PetPal/dev/clientsrc/src/assets/Home.PNG",
    },
    {
      title: "Bartendr",
      description:
        "Live stream from your favorite bar, see who is working and who is drinking",
      imageUrl:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/11/17/11/istock-89516603-medium.jpg",
    },
    {
      title: "Google",
      description:
        "Project Pidgeotto: Connect Salesforce to all Google's internal tools",
      imageUrl: "https://pluspng.com/img-png/google-logo-png-open-2000.png",
    },
    {
      title: "Fisher Investments",
      description:
        "Create and connect Salesforce to FI's internal tools and systems",
      imageUrl:
        "https://i.pinimg.com/originals/5e/33/c5/5e33c5a821960f5d467f1f51b40477fc.jpg",
    },
  ];

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
        <div className="container mx-auto flex justify-center sm:justify-between items-center px-4">
          {/* Title Section */}
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
            Spencer's Portfolio
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <a
                    href="#"
                    className="inline-block mt-4 text-blue-500 hover:text-blue-700"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with background image */}
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
