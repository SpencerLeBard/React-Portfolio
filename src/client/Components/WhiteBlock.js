import React from 'react'
import { Link } from "react-router-dom";

function WhiteBlock() {
  return (
<div class="WhiteBlock">
    {/* WHITE RECTANGLE */}
   <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    <div className="bg-white w-75 h-75 rounded-2xl">
      {/* left side text */}
      <div className="relative w-full h-full">
          <h1 className="absolute left-5 top-5 text-black text-4xl font-bold font-mono">Spencer LeBard</h1>
      {/* TODO RIGHT side text */}
          <div className="">
          <h1 className="text-black text-4xl font-bold font-mono">Home</h1>
          <h1 className="text-black text-4xl font-bold font-mono">Portfolio</h1>
          <Link to="/BlogHome">
          <h1 className="text-black text-4xl font-bold font-mono">Blog</h1></Link>
          <h1 className="text-black text-4xl font-bold font-mono">Resume</h1>
          </div>
      </div>
      </div>
    </div>
</div>
  );
}



export default WhiteBlock;
      
   