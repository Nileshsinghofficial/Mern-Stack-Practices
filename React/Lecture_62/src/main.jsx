import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./utils/Context.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext.Provider value="Nilesh">
      <App />
    </UserContext.Provider>
  </StrictMode>
);
