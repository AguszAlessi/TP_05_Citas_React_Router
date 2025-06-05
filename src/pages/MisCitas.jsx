import { useState, useEffect } from "react";
import ListadoCitas from "../components/ListadoCitas";

function MisCitas() {
  const KEY_LOCAL_STORAGE = "citas";

  const [citas, setCitas] = useState(() => {
    const guardadas = localStorage.getItem(KEY_LOCAL_STORAGE);
    return guardadas ? JSON.parse(guardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(citas));
  }, [citas]);

  const eliminarCita = (id) => {
    setCitas(citas.filter((cita) => cita.id !== id));
  };

  return (
    <div className="container">
      <h1>Mis Citas</h1>
      <ListadoCitas citas={citas} onEliminar={eliminarCita} />
    </div>
  );
}

export default MisCitas;
