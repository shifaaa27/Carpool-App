import "./styles/tailwind.output.css";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
  
};

export default App;
