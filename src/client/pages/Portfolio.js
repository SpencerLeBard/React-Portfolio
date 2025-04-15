import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import whiteBackground from "../Assets/largecubbybackground.jpg";

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
      title: "Accenture / Google",
      description:
        "While at Accenture, I spent almost 2 years building out Google's Salesforce org with custom code and configuration. We achieved the goal of integrating with many of Google's internal tools via API.",
      imageUrl: "https://pluspng.com/img-png/google-logo-png-open-2000.png",
    },
    {
      title: "Accenture / Fisher Investments",
      description:
        "While customizing FI's Financial Services Salesforce org, I implemented an algorithm which automatically returns a list of the most efficient salespeople in a territory and routes meetings to those individuals. This increased closing rates by 15%.",
      imageUrl:
        "https://i.pinimg.com/originals/5e/33/c5/5e33c5a821960f5d467f1f51b40477fc.jpg",
    },
    // {
    //   title: "Accenture / Truist",
    //   description:
    //     "Implemented a niche Salesforce feature called “Lobby Management”, which allows for creating queues and waitlists for individual branches, which we exposed to other internal tools via API." ,
    //   imageUrl:
    //     "https://interbrand.com/wp-content/uploads/2020/01/1_Logo-cropped.jpg",
    // },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <Header />

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
        <div className="container mx-auto p-4 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-8">
            Spencer's Portfolio
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  {/* <a
                    href="#"
                    className="inline-block mt-4 text-blue-500 hover:text-blue-700"
                  >
                    View Details
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
