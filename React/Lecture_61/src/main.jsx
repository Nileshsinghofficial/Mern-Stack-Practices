import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Project from "./components/Project.jsx";
import Resume from "./components/Resume.jsx";

let routers = createBrowserRouter([
  {
    path : "/",
    element: <Home />,
    children :[
      {
        path : "/",
        element : <Body />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "project",
        element: <Project />
      },
      {
        path : "resume",
        element: <Resume />
      }
    ]
  }
])

// let routers = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/"  element={<Home />}>
//           <Route path="" element={<Body />} />
//           <Route path="resume" element={<Resume/>} />
//           <Route path="projects" element={<Project />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<h1>Error Page not found!</h1>} />
//     </Route>
//   )
// )

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <RouterProvider router={routers}/>

    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </StrictMode>
);
