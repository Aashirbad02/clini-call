import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
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

    const data = await res;

    if (data.status === 422 || !data) {
      data.json().then((e) => {
        toast.error(e.error);
        console.log(e.error);
      });
    } else {
      data.json().then((e) => {
        toast.success("Successfully Registered");
        console.log(e.message);
      });

      navigate("/login");
    }
  };
  return (
    <div className="h-600 p-6  bg-gray-100 flex items-center justify-center">
      <div className="container flex max-w-screen-lg mx-auto mt-10">
        <div className="md:block hidden w-1/2 h-3/4 ">
          <img
            className="rounded-2xl object-cover"
            src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="oops"
          />
        </div>
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8  ">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
              </div>

              <form method="POST" className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      className="block border border-grey-light w-full p-3 rounded mb-2"
                      name="name"
                      placeholder="Full Name"
                      value={user.name}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      className="block border border-grey-light w-full p-3 rounded mb-2"
                      name="email"
                      placeholder="email@domain"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="number"
                      className="block border border-grey-light w-full p-3 rounded mb-2"
                      name="phone"
                      placeholder="987654321"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="age">Age</label>
                    <input
                      type="number"
                      className="block border border-grey-light w-full p-3 rounded mb-2"
                      name="age"
                      placeholder="19"
                      value={user.age}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="md:col-span-2">
                  <label for="bloodg">Blood Group</label>
                    <select
                      id="countries"
                      
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                      
                      <option selected>Choose</option>
                      <option value="US">A+</option>
                      <option value="CA">A-</option>
                      <option value="FR">B+</option>
                      <option value="DE">B-</option>
                      <option value="DE">AB+</option>
                      <option value="DE">AB-</option>
                      <option value="DE">O+</option>
                      <option value="DE">O-</option>
                    </select>
                    <input type='text'
                    value={user.bloodg}
                    onChange={handleInput}

                     /> 
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="gender">Gender</label>
                    <input
                      type="text"
                      className="block border border-grey-light w-full p-2 rounded mb-2"
                      name="gender"
                      placeholder="Female"
                      value={user.gender}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="pincode"> Pincode</label>
                    <input
                      type="number"
                      className="block border border-grey-light w-full p-2 rounded mb-2"
                      name="pincode"
                      placeholder="751001"
                      value={user.pincode}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="block border border-grey-light w-full p-2 rounded mb-2"
                      name="password"
                      placeholder="Kiwis786"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                      type="passsword"
                      className="block border border-grey-light w-full p-2 rounded mb-2"
                      name="cfpassword"
                      placeholder="Kiwis786"
                      value={user.cfpassword}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="md:col-span-5 text-center">
                    <div className="inline-flex items-end">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={sendData}
                      >
                        Register
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                  <div className="md:col-span-5 flex my-4 justify-center">
                    <p className="mx-2 my-auto font-semibold">
                      Already have an account?
                    </p>
                    <div>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mx-auto rounded">
                        <NavLink className="nav-link" to="/login">
                          Login
                        </NavLink>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
