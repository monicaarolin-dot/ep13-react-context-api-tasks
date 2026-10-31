
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CartDemo from "./CartDemo.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartDemo />
  </StrictMode>
);
