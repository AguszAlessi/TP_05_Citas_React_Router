import React from "react";
import './Cita.css';



 function Cita ({dueño ,hora ,mascota,fecha,sintomas, onEliminar}){

    return (
      
        <div className="cita">
        <p>Mascota: <span>{mascota}</span></p>
        <p>Dueño: <span>{dueño}</span></p>
        <p>Fecha: <span> {fecha}</span></p>
        <p>Hora: <span> {hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p><button className="eliminar" onClick={onEliminar}> Eliminar ×</button>
      </div>
    )
}
export default Cita;
