import { useState, useEffect } from "react";
import AgregarCita from "./Formulario";
import ListadoCitas from "./ListadoCitas";
import "./App.css";

export default function App() {
  const KEY_LOCAL_STORAGE = "citas";
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem(KEY_LOCAL_STORAGE);
    if (citasGuardadas != null) return JSON.parse(citasGuardadas);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (nuevo) => {
    const nuevaCita = { ...nuevo, id: Date.now() };
    const nuevasCitas = [...citas, nuevaCita];
    setCitas(nuevasCitas);

  };

  const eliminarCita = (id) => {
    setCitas(citas.filter((cita) => cita.id !== id));
  };

  return (
    <>
      <h1> Administracion de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half-column">
            <h2> Crear mi cita </h2>
            <AgregarCita onAgregar={agregarCita} />
          </div>

          <div className="one-half column">
            <ListadoCitas citas={citas} onEliminar={eliminarCita} />
          </div>
        </div>
      </div>
    </>
  );
}
