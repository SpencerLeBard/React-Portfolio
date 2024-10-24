import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Portfolio = () => {
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
    <div>
      {/* <div className="container mx-auto p-4"> */}
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

      <h1 className="text-4xl font-bold text-center mb-8">My Portfolio</h1>
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
      <Footer />
    </div>
  );
};

export default Portfolio;
