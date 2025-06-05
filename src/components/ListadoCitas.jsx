import Cita from "./Cita";
import './ListadoCitas.css';

function ListadoCitas({ citas, onEliminar }) 
{
  if (!citas) return null;
  return (

    <div className="lista-citas">
      <h2>Administra tus citas</h2>
      
            {citas.map((cita) => (
            <Cita
                key={cita.id}
                mascota={cita.mascota}
                dueño={cita.dueño}
                fecha={cita.fecha}
                hora={cita.hora}
                sintomas={cita.sintoma} 
                onEliminar={() => onEliminar(cita.id)}
            />
            ))}
    </div>
  );
}

export default ListadoCitas;