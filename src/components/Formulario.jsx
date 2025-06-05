import { useState } from "react";
import './Formulario.css';



function AgregarCita({ onAgregar }) {
  const [mascota, setMascota] = useState("");
  const [dueño, setDueño] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [hora, setHora] = useState("");
  const [fecha, setFecha] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    if (mascota.trim() && dueño.trim() && sintomas.trim() && hora.trim() && fecha.trim()) {
      onAgregar({
        mascota: mascota.trim(),
        dueño: dueño.trim(),
        sintoma: sintomas.trim(),
        hora:hora.trim(),
        fecha:fecha.trim()
      });
      setMascota("");
      setDueño("");
      setSintomas("");
      setFecha("");
      setHora("");
      localStorage
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>Nombre Mascota</label>
    <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={mascota} onChange={e => setMascota(e.target.value)} />

    <label>Nombre Dueño</label>
    <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={dueño} onChange={e => setDueño(e.target.value)} />

    <label>Fecha</label>
    <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={e => setFecha(e.target.value)} />

    <label>Hora</label>
    <input type="time" name="hora" className="u-full-width" value={hora} onChange={e => setHora(e.target.value)} />

    <label>Sintomas</label>
    <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={e => setSintomas(e.target.value)} />

    <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
  </form>
  
  );
}

export default AgregarCita;
