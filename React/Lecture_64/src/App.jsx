import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FunctionComponent from "./Components/FunctionComponent";
import ClassComponent from "./Components/ClassComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<FunctionComponent name="Nilesh Function-component"  />} />
        <Route path="/classComponent" element={<ClassComponent name="Nigam Class Component" />}  />
      </Route>
        <Route path="*" element={<h1>Page not Found</h1>} />
    </Routes>
  );
}

export default App;
