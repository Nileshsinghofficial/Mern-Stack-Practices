import React from "react";
import { Link, Outlet } from "react-router-dom";
import InPageNavigation from "./InPageNavigation";

function Navbar() {
  return (
    <div className="w-[100%] lg:w-[50%] min-h-screen mx-auto   bg-gray-900 text-white">
        <InPageNavigation teams={[{title:"MATCHES", path: "/"},{title:"NEWS", path: "/news"}, {title:"TABLEPOINT", path: "/pointtable"}]}>

        </InPageNavigation>
        {/* <Link to={"/"}><h1>Matches</h1></Link>
        <Link to={"/pointtable"}><h1>Table Point</h1></Link> */}
    
      <Outlet />
    </div>
  );
}

export default Navbar;
