import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Resume from "./components/Resume";
// import { useEffect } from "react";

function App() {
//  let navigation = useNavigate()
 
  // useEffect(() => {
  //  let timer = setTimeout(() => {
  //     navigation("")
  //   })

  //   return() =>{
  //     clearTimeout(timer)
  //     console.log("cleen run")
  //   }
  // },[navigation])

  return (
     
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Body />} />
          <Route path="resume" element={<Resume/>} />
          <Route path="projects" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>Error Page not found!</h1>} />
        </Route>
      </Routes>
     
  );
}

export default App;
