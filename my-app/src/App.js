import{Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Login from "./pages/Login";
import {useState} from "react";



function App() {
	const[status, setStatus] = useState(false);

const authenticate =() =>{
	setStatus(true)
}
const logout =()=>{
	setStatus(false)
}

  return (
    <div>
      <Routes>
<Route path= "/login" element={<Login auth={authenticate}/>} />
<Route path= "/about" element={<About />}/>
<Route path= "/main" element={<Main logout ={logout} status = {status} />}/>
</Routes>
    </div>
  );
}

export default App;
