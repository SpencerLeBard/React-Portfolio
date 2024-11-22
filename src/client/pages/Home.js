import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import background from "../Assets/largecubbybackground.jpg";
import Header from "../components/Header";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open and close modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <Header openModal={openModal} />

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
          className={`hero-section flex-grow flex items-center justify-center py-20`}
        >
          <div className="container mx-auto text-center bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
              Welcome to Spencer LeBard's portfolio and blog!
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Explore my work and read my latest blogs here.
            </p>
            <Link
              to="/Portfolio"
              className="inline-block bg-gray-600 text-gray-200 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 font-medium no-underline block sm:inline-block px-4 py-2 text-lg font-medium text-black no-underline hover:text-gray-300 transition duration-200"
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
            <form>{/* Form Fields */}</form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
