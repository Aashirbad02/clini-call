/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Doctor = ({
  name,
  email,
  contact,
  img,
  designation,
  pincode,
  address,
  consultation,
}) => {
  return (
    <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img className="w-10 h-10 rounded-full" src={img} alt="Jese image" />
        <div className="pl-3">
          <div className="text-base font-semibold">{name}</div>
          <div className="font-normal text-gray-500">{address},{pincode}</div>
        </div>
      </th>
      <td className="px-6 py-4">{designation}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">{contact}</div>
      </td>
      <td className="px-6 py-4">
        <a
          href="/"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {email}
        </a>
      </td>
      <td className="px-12 py-4">
        <a href="/" className="font-medium ">
          {consultation}
        </a>
      </td>
    </tr>
  );
};

export default Doctor;
