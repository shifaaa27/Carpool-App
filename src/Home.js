import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import bg_img from "./images/bg-img.jpeg";
import axios from "axios";

const Home = () => {
  let name, value;
  const navigate = useNavigate();

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const [user, setUser] = useState({
    uname: "",
    pass: "",
  });
  const handleClick = () => {
    console.log("bumty", user.uname, user.pass);
    axios.post("http://localhost:3002/auth/login", {
        uname: user.uname,
        pass: user.pass,
      })
      .then((res) => {
        alert("Successfull Login");
        localStorage.setItem("uname", user.uname);
        
        navigate("/ineedride");
      })
      .catch((err) => {
        alert("Invalid Login");
        console.log("npno", err.message);
      });

    // navigate("/ineedride");
  };

  return (
    <div className="w-screen h-screen bg-white flex">
      <div class="w-1/2 items-center justify-center  bg-gradient-to-r from-[#B6D997] to-[#dedede] p-24">
        <div class="bg-white px-8 py-4 rounded-lg w-full">
          <div class="h-10 flex w-full">
            <button class="text-lg px-4 border-b-[#557199] border-2 border-transparent">
              Login
            </button>
            <button class="px-4 text-lg">
              {" "}
              <Link to="/Register">Register</Link>
            </button>
          </div>
          <div class="py-6 w-14 h-14 border-5 items-center justify-center">
            {" "}
            Username:{" "}
          </div>
          <input
            type="uname"
            name="uname"
            value={user.uname}
            onChange={handleInputs}
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-black placeholder-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your username"
          />
          <div class="py-6 w-14 h-14 border-5 items-center justify-center">
            {" "}
            Password:{" "}
          </div>
          <input
            type="pass"
            name="pass"
            autoComplete="off"
            value={user.pass}
            onChange={handleInputs}
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-black placeholder-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your password"
          />
          <div class="flex items-center justify-center">
            <button
              class="mt-8 bg-transparent hover:bg-[#000000] text-[#000000] font-semibold hover:text-white py-2 px-4 border border-[#000000] hover:border-transparent rounded"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
          <div class="flex items-center justify-center mt-4 mb-8">
            <p class="underline">
              {" "}
              <Link to="/Register">Not a registered user? Register here</Link>
            </p>
          </div>
        </div>
      </div>
      <div class="w-1/2 flex flex-col bg-gradient-to-l from-[#ffffff] to-[#dedede] justify-center items-center">
        <p className="text-transparent bg-clip-text bg-gradient-to-l from-[#B6D997] to-[#A3C3C2] font-sans font-semibold text-9xl">
          CARPOOL
        </p>
        <p class="text-bold text-1xl ">
          share the ride,share the cost and make a difference with every mile{" "}
        </p>
        {/* <img  src={bg_img} alt="bgimg"/> */}
        {/* <div
              class=" w h-full bg-contain bg-center"
              style={{ background: `url(${IMAGE})` }}>
            </div> */}
      </div>
    </div>
  );
};

export default Home;
