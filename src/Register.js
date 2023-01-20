import {Link} from 'react-router-dom';
const IMAGE =
  "https://i.ibb.co/qJnSkQS/finalmaps.jpg"
const Register = () => {
    return (
        <div className="w-screen h-screen bg-white flex overflow-hidden">
        <div class="w-1/2 flex items-center justify-center">
          <div
            class="w-full h-full"
            style={{ background: `url(${IMAGE})`, backgroundRepeat: "no-repeat" }}>
          </div>
        </div>
        <div class="w-1/2 items-center justify-center bg-gradient-to-b from-[#B6D997] to-[#A3C3C2] p-24 py-24 overflow-y-auto">
          <div class="bg-white px-8 py-4 rounded-lg w-full">
            <div class="h-10 flex w-full">
              <button class="text-lg px-4 border-2 border-transparent">
                <Link to="/Home">Login</Link>
              </button>
              <button class="text-lg px-4 border-2 border-transparent border-b-[#557199]"> <Link to="/Register">Register</Link></button>
            </div>
            <div class="py-7 w-25 h-10 border-5 items-center justify-center"> Name: </div>
              <input type="name" name="name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your name" />
            <div class="py-7 w-25 h-10 border-5 items-center justify-center"> Roll number: </div>
              <input type="rno" name="rno" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your roll number" />
            <div class="py-7 w-25 h-10 border-5 items-center justify-center"> Vehicle Number: </div> 
                <input type="vno" name="vno" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your vehicle number" />
            <div class="py-7 w-25 h-10 border-5 items-center justify-center"> Contact number: </div>
              <input type="cno" name="cno" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your contact number" />
            <div class="py-7 w-25 h-10 border-5 items-center justify-center"> Username: </div>
              <input type="uname" name="uname" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter username" />
            <div class="py-7 w-25 h-10 border-5 items-center justify-center"> Password: </div>
              <input type="pass" name="pass" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter password (include special characters)" />
            <div class="flex items-center justify-center">
            <button class="mt-8 bg-transparent hover:bg-[#7FA6B7] text-[#7FA6B7] font-semibold hover:text-white py-2 px-4 border border-[#7FA6B7] hover:border-transparent rounded">
              Submit
            </button>
            </div>
            <div class="flex items-center justify-center mt-4 mb-8">
            <p class="underline"> <Link to="/Home">Login here</Link></p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Register