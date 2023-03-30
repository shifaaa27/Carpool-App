import { Link } from "react-router-dom";

const help = () => {
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
              Pranav
            </p>

            <p class="italic hover:not-italic tracking-widest ">
              PSG College Of Technology
            </p>
            <button class=" mt-20 w-96 py-2 bg-gray-50 font-bold  hover:not-italic tracking-widest  hover:bg-neutral-500 hover:text-stone-50">
             
                <Link to="/accDetails">AccountDetails</Link>
              
            </button>
            <button class="w-96 py-2 font-bold hover:not-italic tracking-widest bg-gray-50   border shadow-sm border-stone-400 placeholder-blue-400 hover:bg-neutral-500 hover:text-stone-50">
              Ride History
            </button>
            <button class=" w-96 py-2 bg-gray-50 font-bold  hover:not-italic tracking-widest  hover:bg-neutral-500 hover:text-stone-50">
              Help
            </button>
            <div class="px-4 mt-20">
              <button class="mt-4 px-3 py-2 rounded-not  bg-red-300 placeholder-slate-400 hover:bg-red-600 hover:rounded-full hover:text-white">
              <Link to="/Home">LogOut</Link>
              </button>
            </div>
          </div>
          <div class="w-2/3 flex items-center justify-center">
            <p class="italic hover:not-italic tracking-widest ">
            Welcome to our carpooling app! Our app is designed to help people share rides with each other to save money, reduce traffic congestion, and minimize their carbon footprint.

With our app, you can easily find other people in your area who are going in the same direction as you, and coordinate rides together. Whether you're commuting to work or heading to a social event, our app makes it easy to find a carpool partner.
<br/>
Our app is user-friendly and intuitive, with features like real-time tracking, in-app messaging, and automatic payment processing to make the carpooling experience as seamless as possible. Plus, we prioritize safety, with features like driver background checks and in-app safety ratings for passengers and drivers.
<br/>
By using our app, you can save money on gas and reduce wear and tear on your vehicle, while also doing your part to reduce traffic congestion and carbon emissions. So why not join the carpooling revolution and start sharing rides today?
<br/>
<br/>
Contact number: +91 9962018163
<br/>
Email: pranavkick308@gmail.com

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default help;