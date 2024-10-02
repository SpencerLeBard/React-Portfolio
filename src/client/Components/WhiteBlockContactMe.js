import React from "react";
//import { Link } from "react-router-dom";

function WhiteBlockContactMe() {
  return (
    <div class="WhiteBlockContactMe">
      {/* WHITE RECTANGLE */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="bg-white w-75 h-75 rounded-2xl">
          {/* TODO RIGHT side text */}
          <div className="relative flex justify-center">
            <div className="absolute top-5">
              <h1 className="text-black text-4xl font-bold font-mono">
                Spencer LeBard
              </h1>
              <h1 className="text-black text-4xl font-bold font-mono">
                slebard@gmail.com
              </h1>
              <h1 className="text-black text-4xl font-bold font-mono">
                github.com/SpencerLeBard
              </h1>
              <h1 className="text-black text-4xl font-bold font-mono">
                linkedin.com/in/spencerlebard
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhiteBlockContactMe;
