import React from "react";
import Register from "./Registerpage/Register.jsx";
import Login from "./loginpages/Login.jsx"
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Errorpage from "./Errorpage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;