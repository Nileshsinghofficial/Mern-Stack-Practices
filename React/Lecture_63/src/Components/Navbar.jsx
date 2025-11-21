import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to={'/'}>
        <button>Function Components</button>
      </Link>
      <Link to={"/classComponent"}>
        <button>Class Components</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default Navbar;
