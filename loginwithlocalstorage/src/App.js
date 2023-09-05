import React from "react";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import Login from './components/Login';
import Register from "./components/Register";





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