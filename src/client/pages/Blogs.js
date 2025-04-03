import React, { useState } from "react";
import BlogList from "../Components/BlogList";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import whiteBackground from "../Assets/largecubbybackground.jpg";

const Blogs = () => {
  // If you need modal functionality for login, you can include it here
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open and close modal handlers (if needed)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <Header
        // Pass openModal if you have modal functionality
        openModal={openModal}
      />

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
          <h1 className="text-4xl font-bold text-center mb-8">All Blogs</h1>
          <BlogList />
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modal (if needed)
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form>
              // Form Fields
            </form>
          </div>
        </div>
      )}
      */}
    </div>
  );
};

export default Blogs;
