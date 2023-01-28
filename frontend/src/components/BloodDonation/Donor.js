import React from "react";

const Donor = ({ name, age, gender, bloodg, pincode, phone }) => {
  return (
    <tr className=" bg-white border-b hover:bg-gray-50 ">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
      >
        <div className="pl-3">
          <div className="text-base font-semibold">{name}</div>
          <div className="font-normal text-gray-500">
            {gender},{age}
          </div>
        </div>
      </th>
      <td className="px-6 py-4">{bloodg}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">{phone}</div>
      </td>
      <td className="px-6 py-4">
        <a href="/" className="font-medium text-blue-600 hover:underline">
          {pincode}
        </a>
      </td>
    </tr>
  );
};

export default Donor;
