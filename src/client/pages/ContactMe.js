import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import background from "../Assets/largecubbybackground.jpg";

function ContactMe() {
  // Modal state and handlers
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <Header openModal={openModal} />

      {/* Main content */}
      <div
        className="flex-grow flex flex-col"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Contact Info Section */}
        <div className="relative h-screen">
          {/* White Box with Contact Info */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-xl">
              <h1 className="text-black text-4xl font-bold font-mono mb-4">
                Spencer LeBard
              </h1>
              <h1 className="text-black text-4xl font-bold font-mono mb-4">
                slebard@gmail.com
              </h1>
              <h1 className="text-black text-4xl font-bold font-mono mb-4">
                <a
                  href="https://github.com/SpencerLeBard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/SpencerLeBard
                </a>
              </h1>
              <h1 className="text-black text-4xl font-bold font-mono">
                <a
                  href="https://linkedin.com/in/spencerlebard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/spencerlebard
                </a>
              </h1>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form>
              {/* Username Field */}
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

              {/* Password Field */}
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

              {/* Action Buttons */}
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

export default ContactMe;
