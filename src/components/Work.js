import React from "react";
import Libray from "../assets/library app.jpg";

function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col text-center justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check Out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols3 gap-4">
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contet-div">
            <div className="group items-center">
              <img src="./Screenshot frcroengappom 2023-07-24 15-51-41.jpg" />
              <span className="text-2xl font-bold opacity-0 group-hover:opacity-100 text-white text-center  tracking-wider">
                Croeng web app
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-center rounded-lg opacity-0 group-hover:opacity-100  px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg opacity-0 group-hover:opacity-100  px-4 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contet-div">
            <div className="group items-center">
              <img src="./Screenshot frcroengappom 2023-07-24 15-51-41.jpg" />
              <span className="text-2xl font-bold opacity-0 group-hover:opacity-100 text-white text-center  tracking-wider">
                Croeng web app
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-center rounded-lg opacity-0 group-hover:opacity-100  px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg opacity-0 group-hover:opacity-100  px-4 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contet-div">
            <div className="group items-center">
              <img src="./Screenshot frcroengappom 2023-07-24 15-51-41.jpg" />
              <span className="text-2xl font-bold opacity-0 group-hover:opacity-100 text-white text-center  tracking-wider">
                Croeng web app
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-center rounded-lg opacity-0 group-hover:opacity-100  px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg opacity-0 group-hover:opacity-100  px-4 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default Work;
