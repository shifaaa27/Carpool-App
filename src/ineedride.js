import { Link } from "react-router-dom";
import Map from "mapmyindia-react";
const IMAGE =
  "https://i.ibb.co/bgJcj6s/bgmap.png";

const ineedride = () => {
  return (
    <div>
      <div class="w-full flex item-center justify-center">
        <div
          class="w-screen h-screen"
          style={{ background: `url(${IMAGE})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div class="">  
          
          

          

          <button class="m-4 bg-white hover:bg-[#7FA6B7] text-[#7FA6B7] font-semibold hover:text-white py-2 px-4 border border-[#7FA6B7] hover:border-transparent rounded">
              <Link to="/accDetails">Account Details</Link>
            </button>
            
          
            <div class="w-1/4 absolute bottom-16 right-8 bg-white px-10 py-10 rounded-lg">
              <button class="mt-2 mr-2 bg-[#7FA6B7] hover:bg-[#7FA6B7] text-[#020608] font-semibold hover:text-white py-2 px-3 border border-[#000000] hover:border-transparent rounded">
                I need a ride</button>
              <button class="mt-2 mx-2 bg-transparent hover:bg-[#7FA6B7] text-[#010405] font-semibold hover:text-white py-2 px-3 border border-[#000000] hover:border-transparent rounded">
                I am driving</button>
              <div class="py-2 w-18 h-3 border-5 items-center justify-center"></div>
              <input type="username" name="username" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Pickup Location" />
              <div class="py-1 w-14 h-3 border-5 items-center justify-center"></div>
              <input type="password" name="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Where to?" />
              <div class="flex items-center justify-center">
                <button class="mt-4 bg-transparent hover:bg-[#7FA6B7] text-[#7FA6B7] font-semibold hover:text-white py-2 px-4 border border-[#7FA6B7] hover:border-transparent rounded">
                  Find me a ride!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ineedride