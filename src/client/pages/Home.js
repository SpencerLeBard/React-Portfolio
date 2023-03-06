import React from 'react'
import backgroundArt from '../Assets/abstract.jpg'; 
import marble from '../Assets/marble.jpg';


function Home() {
  return (
<div class="BackgroundHome">
  <div className="relative">
      <img
        className="w-full max-h-screen w-screen"
        src={backgroundArt}
        alt="Background"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Hello, World!</h1>
      </div>
    </div>
</div>
  );
}



export default Home;