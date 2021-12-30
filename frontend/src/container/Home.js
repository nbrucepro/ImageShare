import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";

// import { Sidebar, UserProfile } from "../components";
// import { userQuery } from "../utils/data";
// import { client } from "../client";
// import Pins from "./Pins";
// import logo from "../assets/logo.png";
function Home() {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [user, setUser] = useState();
    const scrollRef = useRef(null);
    useEffect(() => {
      const query = userQuery(userInfo?.googleId);
      client.fetch(query).then((data) => {
        setUser(data[0]);
      });
    }, []);
    return (
        <div>
            
        </div>
    )
}

export default Home
