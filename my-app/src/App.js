import{Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Login from "./pages/Login";



function App() {
  return (
    <div>



      <Routes>
<Route path= "/login" element={<Login/>}/>
<Route path= "/about" element={<About />}/>
<Route path= "/main" element={<Main />}/>
</Routes>
    </div>
  );
}

export default App;
