import { Link, useNavigate } from "react-router-dom";
import bg_img from "./images/bg-img.jpeg";
import React, { useState } from "react";
import axios from "axios";

const IMAGE =
  "https://www.linkpicture.com/q/WhatsApp-Image-2023-03-09-at-14.01.42.jpeg";

const Register = () => {
  let name, value;
  const navigate = useNavigate();
  
  const handleClick = () => {
    // alert("Submitted");
    console.log(user.name);
    console.log(user.cno);
    console.log(user.vno);
    console.log(user.pass);
    console.log(user.rno);
    console.log(user.uname);

    axios.post("http://localhost:3002/auth/register", {
      name: user.name,
      rno: user.rno,
      pass: user.pass,
      vno: user.vno,
      uname: user.uname,
      cno: user.cno,
    });

    alert("User Created");
    localStorage.setItem("uname", user.uname);

    navigate("/Home");
  };
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const [user, setUser] = useState({
    name: "",
    rno: "",
    vno: "",
    cno: "",
    uname: "",
    pass: "",
  });

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#ffffff] to-[#bbbbbb] flex overflow-auto transition-transform">
      <div class="w-1/2 flex flex-col justify-center items-center hover:transition-all ">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6D997] to-[#A3C3C2] font-sans font-semibold text-9xl transition ease-in-out delay-150">
          CARPOOL
        </p>
        <p class="text-bold text-1xl ">
          share the ride,share the cost and make a difference with every mile{" "}
        </p>

        {/* <img src={bg_img} alt="bgimg" /> */}
      </div>
      <div class="w-1/2 items-center justify-center bg-gradient-to-l from-[#B6D997] to-[#dedede] p-24  overflow-y-auto">
        <div class="bg-white px-8 py-4 rounded-lg w-full">
          <div class="h-10 flex w-full">
            <button class="text-lg px-4 border-2 border-transparent">
              <Link to="/Home">Login</Link>
            </button>
            <button class="text-lg px-4 border-2 border-transparent border-b-[#000000]">
              {" "}
              <Link to="/Register">Register</Link>
            </button>
          </div>
          <div class="py-7 w-25 h-10 border-5 items-center justify-center">
            {" "}
            Name:{" "}
          </div>
          <input
            type="name"
            name="name"
            autoComplete="off"
            value={user.name}
            onChange={handleInputs}
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-black placeholder-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your name"
          />
          <div class="py-7 w-25 h-10 border-5 items-center justify-center">
            {" "}
            Roll number:{" "}
          </div>
          <input
            type="rno"
            name="rno"
            autoComplete="off"
            value={user.rno}
            onChange={handleInputs}
            class="mt-1 px-3 py-2 bg-white border shadow-sm  border-black placeholder-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your roll number"
          />
          <div class="py-7 w-25 h-10 border-5 items-center justify-center">
            {" "}
            Vehicle Number:{" "}
          </div>
          <input
            type="vno"
            name="vno"
            autoComplete="off"
            value={user.vno}
            onChange={handleInputs}
            class="mt-1 px-3 py-2 bg-white border shadow-sm  border-black placeholder-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your vehicle number (if nothing leave NIL)"
          />
          <div class="py-7 w-25 h-10 border-5 items-center justify-center">
            {" "}
            Contact number:{" "}
          </div>
          <input
            type="cno"
            name="cno"
            autoComplete="off"
            value={user.cno}
            onChange={handleInputs}
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-black placeholder-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your contact number"
          />
          <div class="py-7 w-25 h-10 border-5 items-center justify-center">
            {" "}
            Username:{" "}
          </div>
          <input
            type="uname"
            name="uname"
            autoComplete="off"
            value={user.uname}
            onChange={handleInputs}
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-black placeholder-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter username"
          />
          <div class="py-7 w-25 h-10 border-5 items-center justify-center">
            {" "}
            Password:{" "}
          </div>
          <input
            type="pass"
            name="pass"
            autoComplete="off"
            value={user.pass}
            onChange={handleInputs}
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-black placeholder-black  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter password (include special characters)"
          />
          <div class="flex items-center justify-center">
            <button
              class="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mt-8 bg-transparent hover:bg-[#000000] text-[#000000] font-semibold hover:text-white py-2 px-4 border border-[#000000] hover:border-transparent rounded"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
          <div class="flex items-center justify-center mt-4 mb-8">
            <p class="underline">
              {" "}
              <Link to="/Home">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
