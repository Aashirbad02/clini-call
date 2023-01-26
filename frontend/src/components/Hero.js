import React from "react";
import Navbar from "./Navbar";



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
            <p className="text-3xl mb-4 ">Unique Sequencing & Production</p>
            <h1 className="py-2 text-4xl md:text-7xl font-bold">
              Quality Healthcare
            </h1>
            {/* <p className='text-2xl'>This is our Tech brand.</p> */}
            <button className="md:py-3  px-4 my-12 text-md py-2 bg-indigo-700 rounded-md text-white sm:w-[60%] w-[50%] mx-auto md:mx-2 md:my-12">
              Looking for doctor
            </button>
          </div>
          <div >
            <img className="w-full " src='https://res.cloudinary.com/dnqipwdsl/image/upload/v1674746379/cyber-bg_ce0q1c.png' alt="/" />
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default Hero;
