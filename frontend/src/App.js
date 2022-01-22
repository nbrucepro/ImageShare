import './App.css';
// import React, { useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";

// import { Login } from "./components";
import Login from './components/Login';
// import Home from "./container/Home.js";
function App() {
  // const navigate = useNavigate();
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
      {/* <p className="transition-all text-white duration-150 ease-in text-4xl font-bold break-words mt-3 flex animate-slide-fwd">
        hi
      </p> */}
      <Login />
      what
    </div>
  );
}
export default App ;