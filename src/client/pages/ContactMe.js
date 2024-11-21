import React from "react";
import Header from "../components/Header";
import background from "../Assets/largecubbybackground.jpg";
import Footer from "../components/Footer";

function ContactMe() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <Header />

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
          {/* Background Art for Contact Section */}
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={background}
            alt="Background"
          />

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

        {/* Footer (if you have one) */}
        <Footer />
      </div>
    </div>
  );
}

export default ContactMe;
