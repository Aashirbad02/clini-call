import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    bloodg: "",
    age: "",
    gender: "",
    pincode: "",
    password: "",
    cfpassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      bloodg,
      age,
      gender,
      pincode,
      password,
      cfpassword,
    } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        bloodg,
        age,
        gender,
        pincode,
        password,
        cfpassword,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("INVALID REGISTRATION !");
      console.log("INVALID REGISTRATION !");
    } else {
      window.alert("REGISTRATION SUCCESSFUL");
      console.log("REGISTRATION SUCCESSFUL");

      navigate("/dashboard");
    }
  };
  return (
    <div class="h-600 p-6  bg-gray-100 flex items-center justify-center">
      <div class="container flex max-w-screen-lg mx-auto mt-10">
        <div class="md:block hidden w-1/2 h-3/4 ">
          <img
            class="rounded-2xl object-cover"
            src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="oops"
          />
        </div>
        <div>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8  ">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Personal Details</p>
              </div>

              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-5">
                    <label for="full_name">Full Name</label>
                    <input
                      type="text"
                      class="block border border-grey-light w-full p-3 rounded mb-2"
                      name="name"
                      placeholder="Full Name"
                      value={user.name}
                      onChange={handleInput}
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      class="block border border-grey-light w-full p-3 rounded mb-2"
                      name="email"
                      placeholder="email@domain"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div class="md:col-span-5">
                    <label for="phone">Phone Number</label>
                    <input
                      type="number"
                      class="block border border-grey-light w-full p-3 rounded mb-2"
                      name="phone"
                      placeholder="987654321"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label for="age">Age</label>
                    <input
                      type="number"
                      class="block border border-grey-light w-full p-3 rounded mb-2"
                      name="age"
                      placeholder="19"
                      value={user.age}
                      onChange={handleInput}
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="bloodg">Blood Group</label>
                    <input
                      type="text"
                      class="block border border-grey-light w-full p-2 rounded mb-2"
                      name="bloodg"
                      placeholder="B+"
                      value={user.bloodg}
                      onChange={handleInput}
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label for="gender">Gender</label>
                    <input
                      type="text"
                      class="block border border-grey-light w-full p-2 rounded mb-2"
                      name="gender"
                      placeholder="Female"
                      value={user.gender}
                      onChange={handleInput}
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="pincode"> Pincode</label>
                    <input
                      type="number"
                      class="block border border-grey-light w-full p-2 rounded mb-2"
                      name="pincode"
                      placeholder="751001"
                      value={user.pincode}
                      onChange={handleInput}
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="block border border-grey-light w-full p-2 rounded mb-2"
                      name="password"
                      placeholder="Kiwis786"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label for="password">Confirm Password</label>
                    <input
                      type="passsword"
                      class="block border border-grey-light w-full p-2 rounded mb-2"
                      name="cfpassword"
                      placeholder="Kiwis786"
                      value={user.cfpassword}
                      onChange={handleInput}
                    />
                  </div>
                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={sendData}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
