/* eslint-disable jsx-a11y/img-redundant-alt */


import React from "react";
// import { MdEmail } from 'react-icons/Md';
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Doctor = ({ name, email, contact, img, designation }) => {
  return (
    <div class="w-full  bg-white rounded-lg border border-gray-800 shadow-md dark:bg-[#1d4559] dark:border-white mx-auto  ">
      <div class="flex flex-col items-center my-2 comm:py-2 comm:my-2 ">
        <img
          class=" shadow-lg object-cover"
          src={img}
          alt="Bonnie image"
          width="60"
          height="60"
        />
        <h5 class="my-1 text-lg font-bold text-gray-900 dark:text-white">
          {name}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-200 font-bold">
          {designation}
        </span>
        <div class="md:flex mt-2 space-x-2 md:mt-2 pb-2">
          <a
            href={`mailto:${email}`}
            class="inline-flex items-center py-2 sm:px-2 px-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <EmailIcon style={{ color: "white" }} />{" "}
          </a>

          <a
            href={`tel:${contact}`}
            class="inline-flex items-center py-2 sm:px-2 px-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            {" "}
            <PhoneIcon style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
