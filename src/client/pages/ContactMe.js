import React from "react";
import backgroundArt from "../Assets/abstract.jpg";
import WhiteBlockContactMe from "../components/WhiteBlockContactMe";

function ContactMe() {
  return (
    <div class="ContactMe">
      <div className="relative">
        <img
          className="w-full max-h-screen w-screen bg-cover"
          src={backgroundArt}
          alt="Background"
        />
      </div>
      <WhiteBlockContactMe />
    </div>
  );
}

export default ContactMe;
