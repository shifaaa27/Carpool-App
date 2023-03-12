import {Link} from 'react-router-dom';
import React, {useState }  from 'react';
import bg_img from './images/bg-img.jpeg'
const Home = () => {
    const [user,setUser]=useState()

      return (

        <div className="w-screen h-screen bg-white flex">
        <div class="w-1/2 items-center justify-center bg-gradient-to-b from-[#B6D997] to-[#A3C3C2] p-24">
            <div class="bg-white px-8 py-4 rounded-lg w-full">
              <div class="h-10 flex w-full">
                <button class="text-lg px-4 border-b-[#557199] border-2 border-transparent">
                  Login
                </button>
                <button class="px-4 text-lg"> <Link to="/Register">Register</Link></button>
              </div>
              <div class="py-6 w-14 h-14 border-5 items-center justify-center"> Username: </div>
                <input type="username" name="username" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your username" />
              <div class="py-6 w-14 h-14 border-5 items-center justify-center"> Password: </div> 
              <input type="password" name="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password" />
              <div class="flex items-center justify-center">
              <button class="mt-8 bg-transparent hover:bg-[#7FA6B7] text-[#7FA6B7] font-semibold hover:text-white py-2 px-4 border border-[#7FA6B7] hover:border-transparent rounded">
              <Link to="/ineedride">Submit</Link>
                
              </button>
              </div>
              <div class="flex items-center justify-center mt-4 mb-8">
              <p class="underline"> <Link to="/Register">Not a registered user? Register here</Link></p>
              </div>
            </div>
          </div>
          <div class="w-1/2 flex">
          <img  src={bg_img} alt="bgimg"/>
            {/* <div
              class=" w h-full bg-contain bg-center"
              style={{ background: `url(${IMAGE})` }}>
            </div> */}
          </div>
          
        </div>
      );
}

export default Home