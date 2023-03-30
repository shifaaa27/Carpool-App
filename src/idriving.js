import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const IMAGE = "https://i.ibb.co/tYmLdDd/Untitled-design.png";

const Ineedride = () => {
    const [selectedLocation, setSelectedLocation] = useState("");

    let name, value;
    const uname = localStorage.getItem("uname");
    const navigate = useNavigate();
  
    const [data, setData] = useState({});
    useEffect(() => {
      axios.get(`http://localhost:3002/auth/${uname}`).then((res) => {
        setData(res.data);
      });
    }, [uname]);
  
    const handleClick = () => {
      // alert("Submitted");
  
      axios.post("http://localhost:3002/give/uneedride", {
        pickuplocation: user.pickuplocation,
        droplocation: user.droplocation,
        uname: uname,
      }).then((res)=>{
        alert("Ridefound")
        
        
      }).catch((err)=> {
        alert("NoRides")
        console.log("npno",err.message);
      })
  
      alert("setlocation");
      localStorage.setItem("uname", user.uname);
    };
    const handleInputs = (e) => {
      setSelectedLocation(e.target.value);
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({ ...user, [name]: value });
    };
    const [user, setUser] = useState({
      pickuplocation: "",
      droplocation: "",
      uname: uname,
    });

  const locations1 = [
    "Avinashi Road",
    "Gandhipuram",
    "RS Puram",
    "Peelamedu",
    "Singanallur",
    "Podanur",
    "Saravanampatti",
    "Ramanathapuram",
    "Town Hall",
    "Tidel Park",
    "Sathy Road",
    "Race Course",
    "Kavundampalayam",
    "Thudiyalur",
    "Coimbatore North",
    "Coimbatore South",
    "Ganapathy",
    "Ukkadam",
    "Saibaba Colony",
    "Vadavalli",
    "Kovaipudur",
    "Pappanaickenpalayam",
    "Kalapatti",
    "Perur",
    "Sundarapuram",
    "Madukkarai",
    "Malumichampatti",
    "Kuniyamuthur",
    "Hope College",
    "Thudialur",
    "Neelambur",
    "R.S. Puram",
    "Goundampalayam",
    "P.N. Palayam",
    "Ganapathypudur",
    "Podanur Junction",
    "Peelamedu - PSG Tech",
    "Vellalore",
    "Sulur",
    "Nehru Stadium",
    "Ganapathy Maanagar",
  ];
  const locations2 = [
    "Avinashi Road",
    "Gandhipuram",
    "RS Puram",
    "Peelamedu",
    "Singanallur",
    "Podanur",
    "Saravanampatti",
    "Ramanathapuram",
    "Town Hall",
    "Tidel Park",
    "Sathy Road",
    "Race Course",
    "Kavundampalayam",
    "Thudiyalur",
    "Coimbatore North",
    "Coimbatore South",
    "Ganapathy",
    "Ukkadam",
    "Saibaba Colony",
    "Vadavalli",
    "Kovaipudur",
    "Pappanaickenpalayam",
    "Kalapatti",
    "Perur",
    "Sundarapuram",
    "Madukkarai",
    "Malumichampatti",
    "Kuniyamuthur",
    "Hope College",
    "Thudialur",
    "Neelambur",
    "R.S. Puram",
    "Goundampalayam",
    "P.N. Palayam",
    "Ganapathypudur",
    "Podanur Junction",
    "Peelamedu - PSG Tech",
    "Vellalore",
    "Sulur",
    "Nehru Stadium",
    "Ganapathy Maanagar",
  ];

  return (

    <div>
      <div class="w-full flex item-center justify-center">
        <div
          class="w-screen h-screen"
          style={{
            background: `url(${IMAGE})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {}
          <div class="">
            <button class="m-4 bg-white hover:bg-[#7FA6B7] text-[#7FA6B7] font-semibold hover:text-white py-2 px-4 border border-[#7FA6B7] hover:border-transparent rounded">
              <Link to="/accDetails">Account Details</Link>
            </button>

            <div class="w-1/4 absolute bottom-16 right-8 bg-white px-10 py-10 rounded-lg">
              <button class="mt-2 mr-2 bg-[#7FA6B7] hover:bg-[#7FA6B7] text-[#020608] font-semibold hover:text-white py-2 px-3 border border-[#000000] hover:border-transparent rounded">
                <Link to="/ineedride">I need a ride</Link>
              </button>
              <button class="mt-2 mx-2 bg-transparent hover:bg-[#7FA6B7] text-[#010405] font-semibold hover:text-white py-2 px-3 border border-[#000000] hover:border-transparent rounded">
                I am driving
              </button>
              <div class="py-2 w-18 h-3 border-5 items-center justify-center"></div>
              <select
                name="pickuplocation"
                id="pickuplocation"
                value={user.selectedLocation1}
                onChange={handleInputs}
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              >
                <option value="">Select pickup location</option>
                {locations1.map((location1) => (
                  <option key={location1} value={location1}>
                    {location1}
                  </option>
                ))}
              </select>
              <div class="py-1 w-14 h-3 border-5 items-center justify-center"></div>
              <select
                name="droplocation"
                id="droplocation"
                value={user.selectedLocation2}
                onChange={handleInputs}
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              >
                <option value="">Where to?</option>
                {locations2.map((location2) => (
                  <option key={location2} value={location2}>
                    {location2}
                  </option>
                ))}
              </select>
              <div class="flex items-center justify-center">
                <button
                  class="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mt-8 bg-transparent hover:bg-[#000000] text-[#000000] font-semibold hover:text-white py-2 px-4 border border-[#000000] hover:border-transparent rounded"
                  onClick={handleClick}
                >
                  Find me Passengers!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ineedride;
