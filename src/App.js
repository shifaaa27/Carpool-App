import "./styles/tailwind.output.css";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
  
};

export default App;
