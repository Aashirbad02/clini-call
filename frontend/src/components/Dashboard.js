import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import Donors from "./BloodDonation/Donors";
import axiosApp from "../utils/axiosConfig";

const Dashboard = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  const callDashboard = async () => {
    try {
      const res = await axiosApp.get("dashboard");
      setUserData(res.data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    callDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-100 h-[100vh] pt-20">
      <div className="container mx-auto p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Full Name</div>
                    <div className="px-4 py-2">{userData.name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Age</div>
                    <div className="px-4 py-2">{userData.age}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">{userData.gender}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Blood Group</div>
                    <div className="px-4 py-2">{userData.bloodg}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <a className="text-blue-800">{userData.email}</a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Phone Number</div>
                    <div className="px-4 py-2">{userData.phone}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Pincode</div>
                    <div className="px-4 py-2">{userData.pincode}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4"></div>

            <div className="bg-white shadow-sm rounded-sm">
              <div className="md:flex justify-around">
                <div className="p-4">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <BloodtypeIcon />
                    <span className="tracking-wide">Blood Donation Chart</span>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/ash123/image/upload/v1674645136/blood_donation_chart_l6qfsr.png"
                      alt="Blood Donation Chart"
                      className="h-24 w-24 lg:h-64 lg:w-96"
                    />
                  </div>
                </div>
                <Donors />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
