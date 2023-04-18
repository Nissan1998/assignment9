import React from "react";
import manImage from "../../assets/All Images/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <div className="px-5 bg-slate-50 md:flex -mt-24 pt-28">
      <div>
        <h2 className="text-[20px] md:text-[80px] font-bold">
          One Step
          <br /> Closer To Your <br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
            Dream Job
          </span>
        </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="mt-2 border w-36 h-12 rounded-md text-white text-lg bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold">
          Get Started
        </button>
      </div>
      <div>
        <img src={manImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
