/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
// import { MdEmail } from 'react-icons/Md';
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";

const Doctor = ({ name, email, contact, img, designation ,pincode,address}) => {
  return (
    <tr class="w-full  bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          class="w-10 h-10 rounded-full"
          src={img}
          alt="Jese image"
        />
        <div class="pl-3">
          <div class="text-base font-semibold">{name}</div>
          <div class="font-normal text-gray-500">{address}</div>
        </div>
      </th>
      <td class="px-6 py-4">{designation}</td>
      <td class="px-6 py-4">
        <div class="flex items-center">
         
          {contact}
        </div>
      </td>
      <td class="px-6 py-4">
        <a
          href="/"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {email}
        </a>
      </td>
      <td class="px-6 py-4">
        <a
          href="/"
          class="font-medium "
        >
          {pincode}
        </a>
      </td>
    </tr>
    // <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
    //           <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
    //           <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //             {name}
    //           </td>
    //           <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //             {email}
    //           </td>
    //           <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //             {contact}
    //           </td>
    //         </tr>
  );
};

export default Doctor;
