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
    useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
    })
    return (
      <div className ="flex bg-gray-50 md:flex-row flex-col h-screen transion-height duration-75 ease-out">
            <div className="hidden md:flex h-screen flex-initial">
                {/* <Sidebar user={user && user} /> */}
            </div>
            <div className="flex md:hidden flex-row">
    <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
    <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />                
</div>
            </div>
      </div>
    );
}

export default Home
