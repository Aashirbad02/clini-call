import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import {Routes,Route} from 'react-router-dom'
import Signup from "./components/signup";
import Doctors from './components/DoctorCard/Doctors'

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <Routes>
        <Route exact path='/' element={<Hero/>}> </Route>
        <Route exact path='/hero' element={<Hero/>}> </Route>
        {/* <Route exact path='/about' element={<About/>}> </Route> */}
        <Route exact path='/login' element={<Login/>}> </Route>
        <Route exact path='/signup' element={<Signup/>}> </Route>
        {/* <Route exact path='/blood' element={<Blood/>}> </Route>
        <Route exact path='/doctor' element={<Doctor/>}> </Route> */}
      </Routes>
      <Doctors/>
    </div>
  );
}

export default App;
