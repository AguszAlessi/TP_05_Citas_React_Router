import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Citas Médicas</h2>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/NuevaReserva">Nuevas Reservas</Link></li>
        <li><Link to="/MisCitas">Mis Citas</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
