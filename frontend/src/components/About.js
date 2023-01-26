import React from 'react';
import Laptop from '../assets/laptop.jpg';
import {NavLink} from 'react-router-dom'


const About = () => {
  return (
    <div className='w-full bg-white  py-8 px-2 md:py-36 md:px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='md:w-[500px] w-[400px]  mx-auto mt-16   rounded-md' src='https://res.cloudinary.com/dnqipwdsl/image/upload/v1674743811/415_e28jxf.jpg' alt='/' />
        <div className='flex flex-col justify-center  mx-4'>
         
          <h1 className='md:text-4xl sm:text-3xl text-2xl mt-14  font-bold py-2'>One stop solution to your health concerns</h1>
          <p className=' text-lg mt-4'>
          CliniCall is an mhealth platform that connects patients with doctors through booking appointments and consultations in the nearby locations.  </p>
          <p className='text-lg mt-4'> We also have an online blood donation management system maintains the list of blood donors and also helps the recipients to track and search the right donor easily. </p>
        
          <button className='bg-indigo-700 text-white w-[200px] rounded-md font-medium md:mt-12 mt-8 my-6 mx-auto md:mx-0 py-3'>
          <NavLink className="nav-link" to="/doctors">
                    Get Started
                  </NavLink>
            </button>
        </div>
      </div>
      {/* <div
            className=" absolute flex flex-col md:py-6 md:mt-20  py-1 mt-8  justify-center md:min-w-[760px] bottom-[5%]
         md:left-1/2 transform md:-translate-x-1/2 bg-gray-100
        border border-slate-300 rounded-xl text-center shadow-xl"
          >
         
            <div className="flex justify-between flex-wrap  ">
         
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
          </div>  */}
    </div>
  );
};

export default About;