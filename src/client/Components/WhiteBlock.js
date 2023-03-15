import React from 'react'
import { Link } from "react-router-dom";

function WhiteBlock() {
  return (
<div class="WhiteBlock">
    {/* WHITE RECTANGLE */}
   <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    <div className="bg-white w-75 h-75 rounded-2xl">
      {/* left side text */}
      <div className="relative">
          <h1 className="absolute left-5 top-5 text-black text-4xl font-bold font-mono">Spencer LeBard</h1>
      {/* TODO RIGHT side text */}
          <div className="absolute right-5 top-5">
          <h1 className="text-black text-4xl font-bold font-mono">Home</h1>
          <h1 className="text-black text-4xl font-bold font-mono">Portfolio</h1>
          <Link style={{textDecoration: 'none'}} to="/BlogHome">
          <h1 className="text-black text-4xl font-bold font-mono">Blog</h1></Link>
          <Link style={{textDecoration: 'none'}} to="/ContactMe">
          <h1 className="text-black text-4xl font-bold font-mono">Contact Me</h1></Link>
          </div>
      </div>
      </div>
    </div>
</div>
  );
}



export default WhiteBlock;
      
   