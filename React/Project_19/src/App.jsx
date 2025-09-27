import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import MatchDetail from "./components/matchDetail.jsx";
import Navbar from "./components/Navbar.jsx";
import PointTable from "./components/PointTable.jsx";
import News from "./components/News.jsx";

import {} from "./index.css";

function App() {
  return (
    <div className="max-w-screen min-h-screen mx-auto text-white bg-black  ">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/pointtable" element={<PointTable />} />
          <Route path="/news" element={<News />} />
        </Route>
        <Route path="/matchDetail/:id" element={<MatchDetail />} />
      </Routes>
    </div>
  );
}

export default App;
