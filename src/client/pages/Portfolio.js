import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1",
      imageUrl: "your-image-url",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2",
      imageUrl: "your-image-url",
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto p-4">
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
    </div>
  );
};

export default Portfolio;
