import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const AccDetails = () => {

  const uname = localStorage.getItem("uname");
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3002/auth/${uname}`).then((res) => {
      setData(res.data);
    });
  }, [uname])

  return (
    <div className="w-screen h-screen bg-white flex">
      <div class="w-full flex items-center justify-center bg-gradient-to-b from-[#B6D997] to-[#A3C3C2] p-16">
        <div class="bg-white px-8 py-4 rounded-lg w-full flex flex-row ">
          <div class="bg-gray-50 flex flex-col items-center  w-1/3 ">
            
            <img
              class="mt-10"
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              width={100}
              height={100}
            />
            <p class="font-black  italic hover:not-italic tracking-widest ">
              {data.name}
            </p>

            <p class="italic hover:not-italic tracking-widest ">
              PSG College Of Technology
            </p>
            <button class="mt-20 w-96 py-2 font-bold hover:not-italic tracking-widest bg-gray-50   border shadow-sm border-stone-400 placeholder-blue-400 hover:bg-neutral-500 hover:text-stone-50">
              Accounts Details
            </button>
            <button class=" w-96 py-2 bg-gray-50 font-bold hover:not-italic tracking-widest  hover:bg-neutral-500 hover:text-stone-50">
              <Link to="/rideHistory">Ride History</Link>

            </button>
            <button class=" w-96 py-2 bg-gray-50 font-bold  hover:not-italic tracking-widest  hover:bg-neutral-500 hover:text-stone-50">
              Help
            </button>
            <div class="px-4 mt-20">
              <button class="mt-4 px-3 py-2 rounded-not  bg-red-300 placeholder-slate-400 hover:bg-red-600 hover:rounded-full hover:text-white">
              <Link to="/Home ">LogOut</Link>
              </button>
            </div>
          </div>
          <div class="w-2/3">
            <label class="block px-4">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Name
              </span>
              <p class="font-black  italic hover:not-italic tracking-widest ">
              {data.name}
            </p>
            </label>
            <label class="mt-4 block px-4">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Roll Number
              </span>
              <p class="font-black  italic hover:not-italic tracking-widest ">
              {data.rno}
            </p>
            </label>
            <label class="mt-4 block px-4">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Vehicle Number
              </span>
              <p class="font-black  italic hover:not-italic tracking-widest ">
              {data.vno}
            </p>
            </label>
            {/* <label class="mt-4 block px-4">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Vehicle Model(Optional)
              </span>
              <p class="font-black  italic hover:not-italic tracking-widest ">
              {data.rno}
            </p>
            </label> */}
            <label class="mt-4 block px-4">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Contact Number
              </span>
              <p class="font-black  italic hover:not-italic tracking-widest ">
              {data.cno}
            </p>
            </label>
            <label class="mt-4 block px-4">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Username Number
              </span>
              <p class="font-black  italic hover:not-italic tracking-widest ">
              {data.uname}
            </p>
            </label>
            {/* <label class="mt-4 block px-4">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Change Password
              </span>
              <input
                type="email"
                name="email"
                class="mt-1 px-3 py-2 bg-slate-200 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/3 rounded-md sm:text-sm focus:ring-1"
                placeholder="Change Password"
              />
            </label> */}
            {/* <div class="px-4 w-1/2">
              <button class="mt-4 px-3 py-2 rounded-not  bg-blue-300 placeholder-slate-400 hover:bg-blue-600 hover:rounded-full ">
                Save Changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccDetails;
