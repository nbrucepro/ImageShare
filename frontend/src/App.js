import './App.css';
// import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import { Login } from "./components";
import Login from './components/Login';
import Home from "./container/Home.js";
function App() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  //   if (!user) navigate('login');
  // }, []);
  // <Routes>
  // <Route path="login" element={<Login/>}/>  {/* //   <Route path="/*" element={<Home/>}/> */}
  //  </Routes>
  //https://lms.simplilearn.com/courses/4215/ReactJS-for-Beginners/syllabus
  return (
   <div>
        <p>Bruce</p>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>      
    </div>
  );
}
export default App;