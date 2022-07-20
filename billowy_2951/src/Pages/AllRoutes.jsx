import React from 'react'
import {Route, Routes} from "react-router-dom";
import About from './About';
import Community from './Community';
import HealthyLiving from './HealthyLiving';
import Home from './Home';
import Membership from './Membership';
import Programs from './Programs';
import Store from './Store';
import Workout from './Workout';
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/healthyliving" element={<HealthyLiving/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/workout" element={<Workout/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/programs" element={<Programs/>}/>
            <Route path="/membership" element={<Membership/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes