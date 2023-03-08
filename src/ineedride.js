import { Link } from "react-router-dom";
const IMAGE = "https://w0.peakpx.com/wallpaper/418/886/HD-wallpaper-amsterdam-city-digital-dimdom-earth-europe-map-maps-netherlands-streets-travel-design.jpg";
const Login = () => {
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
        <button class="m-4 bg-white hover:bg-[#7FA6B7] text-[#7FA6B7] font-semibold hover:text-white py-2 px-4 border border-[#7FA6B7] hover:border-transparent rounded">
              <Link to="/accDetails">Account Details</Link>
            </button>
          <div class="item-center justify-center">
            <div class="w-1/4 item-center justify-center absolute bottom-8 right-16 bg-white px-5 py-5 rounded-lg">
              <p class="flex item-center justify-center font-bold tracking-wide text-2xl  text-[#557199] text-centre">
                Ride Found !
              </p>
              <div class="flex flex-row items-center gap-2">
                <img
                  class="mt-4 h-13 max-w-xs"
                  src="https://i.ibb.co/5rpM4hN/user.pnghttps://cdn.videoplasty.com/gif/map-flat-icon-gif-stock-gif-3674-1024x576.gif"
                ></img>
                <div>
                  <p class="text-base text-[#557199] font-semibold">Lakshitha</p>
                  <p class="text-xs">+9187654321</p>
                </div>
              </div>

              <input
                type="username"
                name="username"
                class="w-1/2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Vehicle Number"
              />
              <div class="py-1 w-14 h-3 border-5 items-center justify-center"></div>
              <input
                type="password"
                name="password"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Vehicle Model"
              />
              <div class="py-1 w-14 h-3 border-5 items-center justify-center"></div>
              <input
                type="password"
                name="password"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Pickup Location"
              />
              <div class="py-1 w-14 h-3 border-5 items-center justify-center"></div>
              <input
                type="password"
                name="password"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Destination"
              />
              <div class="flex items-center justify-center gap-x-4">
                <button class="mt-4 bg-transparent bg-red-500  hover:bg-[#b77f7f] text-black hover:text-white py-2 px-4 border border-[#b77f7f] hover:border-[#b77f7f] rounded">
                  Cancel ride
                </button>
                <button class="mt-4 bg-transparent bg-blue-500  hover:bg-[#7FA6B7] text-black hover:text-white py-2 px-4 border border-[#7FA6B7] hover:border-transparent rounded">
                  End ride
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;