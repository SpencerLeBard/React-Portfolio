import React from "react";
import backgroundArt from "../Assets/abstract.jpg";
import WhiteBlock from "../components/WhiteBlock";

function Home() {
  return (
    <div class="Home">
      <div className="relative">
        <img
          className="w-full max-h-screen w-screen bg-cover"
          src={backgroundArt}
          alt="Background"
        />
      </div>
      <WhiteBlock />
    </div>
  );
}

export default Home;
