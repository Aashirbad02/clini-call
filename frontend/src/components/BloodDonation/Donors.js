/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Donor from "./Donor";
import axios from "axios";
import { URL } from "../../App";
import { axiosApp1 } from "../../utils/axiosConfig";

const Donors = ({}) => {
  const [search, setSearch] = useState("");
  const [donorsData, setDonorsData] = useState([]);

  const getBloodGroup = async () => {
    try {
      const res = await axiosApp1.get("getData");
      setDonorsData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getBloodGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className=" relative overflow-x-auto sm:rounded-lg">
        <div className="text-2xl my-2 mx-auto flex justify-center font-semibold">
          Donors Near You
        </div>
        <div className="flex items-center justify-center pb-4 ">
          <label
            htmlFor="table-search"
            className="sr-only"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search for doctors"
            />
          </div>
        </div>
        <table className="md:w-full text-sm text-left text-gray-500 ">
          <thead className=" w-full text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="md:w-full">
              <th scope="col" className="px-20 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Blood Group
              </th>
              <th scope="col" className="px-8 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-16 py-3">
                Pincode
              </th>
            </tr>
          </thead>
          <tbody>
            {donorsData
              .filter((data) => {
                return search === "" ? data : data.pincode.includes(search);
              })
              .map((data) => (
                <Donor
                  key={data._id}
                  name={data.name}
                  gender={data.gender}
                  age={data.age}
                  bloodg={data.bloodg}
                  phone={data.phone}
                  pincode={data.pincode}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Donors;
