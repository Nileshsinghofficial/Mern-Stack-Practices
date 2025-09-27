import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className=" w-screen">
      <nav className=" bg-blue-300 h-30 flex items-center justify-evenly text-xl">
       <Link to={"/"}><h1>Logo</h1></Link>
        <div className="flex gap-10">
          <Link to={"resume"}>
            <p>Resume</p>
          </Link>

          <Link to={"projects"}>
            <p>Projects</p>
          </Link>

          <Link to={"about"}>
           <p>About us</p>
          </Link>

          <Link to={"contact"}>
            <p>Contact</p>
          </Link>
          
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;
