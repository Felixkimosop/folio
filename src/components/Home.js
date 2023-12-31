import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kimosop Felix Kipruto
        </h2>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b8]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b8] py-4 max-w-[780px] ">
          I am a Full-stack developer specializing in building (and
          occassionally designing) exceptional digital experiences. Currently, I
          am focused on building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work 
            <span className="hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3 "  />
            </span>
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
