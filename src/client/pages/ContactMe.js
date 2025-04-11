import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import background from "../Assets/largecubbybackground.jpg";

function ContactMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header openModal={openModal} />

      <div
        className="flex-grow flex flex-col"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative flex-grow py-10 px-4 sm:px-6 md:px-8">
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg text-center max-w-xl mx-auto">
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold font-mono mb-4">
              Spencer LeBard
            </h1>
            <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold font-mono mb-4">
              spencer@spencer-lebard.com
            </h1>
            <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold font-mono mb-4">
              <a
                href="https://github.com/SpencerLeBard"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all"
              >
                github.com/SpencerLeBard
              </a>
            </h1>
            <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold font-mono">
              <a
                href="https://linkedin.com/in/spencerlebard"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all"
              >
                linkedin.com/in/spencerlebard
              </a>
            </h1>
          </div>
        </div>

        <Footer />
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form>
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
