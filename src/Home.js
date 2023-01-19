import {Link} from 'react-router-dom';
const IMAGE =
  "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80";

const Home = () => {
    return (
        <div className="w-screen h-screen bg-white flex">
          <div class="w-1/2 flex items-center justify-center">
            <div
              class="w-full h-full"
              style={{ background: `url(${IMAGE})` }}>
    
            </div>
          </div>
          <div class="w-1/2 flex items-center justify-center bg-gradient-to-b from-[#B6D997] to-[#A3C3C2] p-16">
            <div class="bg-white px-8 py-4 rounded-lg w-full">
              <div class="h-20 flex w-full">
                <button class="px-2 text-lg border-b-black border-2 border-transparent">
                <Link to="/login">Login</Link>
                </button>
                <button class="px-2 text-lg">Register</button>
              </div>
    
            </div>
          </div>
        </div>
      );
}

export default Home