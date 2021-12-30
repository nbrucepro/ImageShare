import './App.css';
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Login } from "./components";
import Home from "./container/Home.js";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    if (!user) navigate('login');
  }, []);
  return (
    <Routes>
      <div className="App"></div>
    </Routes>
  );
}

export default App ;
