import "./styles/tailwind.output.css";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import RideFound from "./rideFound";
import AccDetails from "./accDetails";
import RideHistory from "./rideHistory";
import Ineedride from "./ineedride";
import React, { Component }  from 'react';

 


const App = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/rideFound" element={<RideFound />}/>
      <Route path="/accDetails" element={<AccDetails />}/>
      <Route path="/rideHistory" element={<RideHistory />}/>
      <Route path="/ineedride" element={<Ineedride />}/>

      
    </Routes>
  </BrowserRouter>
  );
  
};

export default App;
