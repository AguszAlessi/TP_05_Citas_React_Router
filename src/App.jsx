import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MisCitas from "./pages/MisCitas";
import NuevasReservas from "./pages/NuevasReservas";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevas" element={<NuevasReservas />} />
        <Route path="/citas" element={<MisCitas />} />
      </Routes>
    </>
  );
}
