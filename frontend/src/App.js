import Hero from "./components/Hero";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "../src/reducer/UseReducer";
import Doctors from "./components/DoctorCard/Doctors";
//1: contextAPI
export const UserContext = createContext();

export const URL = process.env.REACT_APP_SERVER_URL;
const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Hero />}></Route>
      <Route exact path="/hero" element={<Hero />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path="/signout" element={<SignOut />}></Route>
      <Route exact path="/dashboard" element={<Dashboard />}></Route>
      <Route exact path="/doctors" element={<Doctors />}></Route>
      <Route exact path="/about" element={<About />}></Route>
    </Routes>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </div>
  );
}

export default App;
