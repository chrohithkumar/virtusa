import React from "react";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";




function App() {
  return (
    <Router>
    <Routes>
        <Route  path="/Home" element={<Home/>} />
        <Route  path="/" element={<Login/>} />
        <Route  path="/Register" element={<Register/>} />
       

    </Routes>
    </Router>  
  );
}

export default App;