import Hero from "./components/Hero";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Hero />}>
          {" "}
        </Route>
        <Route exact path="/hero" element={<Hero />}>
          {" "}
        </Route>
        <Route exact path="/login" element={<Login />}>
          {" "}
        </Route>
        <Route exact path="/signup" element={<Signup />}>
          {" "}
        </Route>
        <Route exact path="/dashboard" element={<Dashboard />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
