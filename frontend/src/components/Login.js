import React, { useState, useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "../App";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("");
  const toggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res;

    if (data.status === 401 || !data) {
      toast.error("Invalid Credentials");
      data.json().then((e) => {
        console.log(e.error);
      });
    } else {
      dispatch({ type: "USER", payload: true });
      toast.success("Successfully Logged In 🎉");
      data.json().then((e) => {
        console.log(e.message);
      });
      navigate("/dashboard");
    }
  };
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* <!-- login container --> */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center mt-20">
        {/* <!-- form --> */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>

          <form method="POST" className="flex flex-col gap-4">
            <input
              className="p-2 mt-4 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={passwordType}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn btn-outline-primary" onClick={toggle}>
                {passwordType === "password" ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </button>
            </div>
            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              onClick={loginUser}
            >
              Login
            </button>
            <ToastContainer />
          </form>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <button className="py-2 px-5 bg-[#002D74] text-white text-md border rounded-xl hover:scale-110 duration-300">
              <NavLink className="nav-link" to="/signup">
                Register
              </NavLink>
            </button>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="oops"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
