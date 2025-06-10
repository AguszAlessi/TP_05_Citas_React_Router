import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Asegurate que esta ruta sea válida
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/TP_05_Citas_React_Router">
      <App />
    </BrowserRouter>
  </StrictMode>
);
