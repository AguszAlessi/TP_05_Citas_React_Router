import { useState, useEffect } from "react";
import Formulario from "../components/Formulario";

function NuevasReservas() {
  const KEY_LOCAL_STORAGE = "citas";

  const [citas, setCitas] = useState(() => {
    const guardadas = localStorage.getItem(KEY_LOCAL_STORAGE);
    return guardadas ? JSON.parse(guardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (nuevo) => {
    const nuevaCita = { ...nuevo, id: Date.now() };
    setCitas([...citas, nuevaCita]);
  };

  return (
    <div className="container">
      <h1>Administración de Pacientes</h1>
      <h2>Crear mi cita</h2>
      <Formulario onAgregar={agregarCita} />
    </div>
  );
}

export default NuevasReservas;
