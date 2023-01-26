import React from "react";
import Navbar from "./Navbar";

import {
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div
        name="home"
        className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
      >
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 ">
            <p className="text-2xl mb-4 ">Unique Sequencing & Production</p>
            <h1 className="py-3 text-4xl md:text-7xl font-bold">
              Quality Healthcare
            </h1>
            {/* <p className='text-2xl'>This is our Tech brand.</p> */}
            <button className="md:py-3 md:px-6 my-4 py-1 bg-indigo-700 rounded-md text-white sm:w-[60%] md:my-4">
              Looking for doctor
            </button>
          </div>
          <div >
            <img className="w-full " src={bgImg} alt="/" />
          </div>
          <div
            className="absolute flex flex-col md:py-6 md:mt-12 py-1 justify-center md:min-w-[760px] bottom-[5%]
         md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl"
          >
            {/* <p>Data Services</p> */}
            <div className="flex justify-between flex-wrap  ">
              {/* <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /></p> */}
              <p className="flex px-4 py-2 text-slate-500">
                <DatabaseIcon className="h-6 text-indigo-600" /> Blood datbase
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <ServerIcon className="h-6 text-indigo-600" /> Doctor Data
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
