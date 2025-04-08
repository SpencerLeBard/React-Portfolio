import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import background from "../Assets/largecubbybackground.jpg";
import Header from "../Components/Header";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <section className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-3xl bg-white bg-opacity-70 p-6 sm:p-10 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              Welcome to Spencer LeBard's blog and portfolio!
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Explore my work and read my latest blogs here.
            </p>
            <Link
              to="/Blogs"
              className="inline-block bg-gray-600 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 font-medium no-underline"
            >
              Go to Blogs
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modal */}
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

export default Home;
