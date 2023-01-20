import {Link} from 'react-router-dom';
const IMAGE =
  "https://i.ibb.co/qJnSkQS/finalmaps.jpg"
const Home = () => {
    return (
        <div className="w-screen h-screen bg-white flex">
          <div class="w-1/2 flex items-center justify-center">
            <div
              class="w-full h-full"
              style={{ background: `url(${IMAGE})`, backgroundRepeat: "no-repeat" }}>
            </div>
          </div>
          <div class="w-1/2 flex items-center justify-center bg-gradient-to-b from-[#B6D997] to-[#A3C3C2] p-16">
            <div class="bg-white px-8 py-4 rounded-lg w-full">
              <div class="h-10 flex w-full">
                <button class="text-lg px-2 border-b-black border-2 border-transparent">
                  <Link to="/Login">Login</Link>
                </button>
                <button class="px-2 text-lg"> <Link to="/Login">Register</Link></button>
              </div>
              <div class="py-6 w-14 h-14 border-5 items-center justify-center"> Username: </div>
                <input type="username" name="username" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your username" />
              <div class="py-6 w-14 h-14 border-5 items-center justify-center"> Password: </div> 
              <input type="password" name="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password" />
              <div class="flex items-center justify-center">
              <button class="mt-4 bg-transparent hover:bg-[#7FA6B7] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-[#7FA6B7] hover:border-transparent rounded">
                Submit
              </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Home