import "./Calendario.css";
import Tabla from "./Tabla";

const meses = [
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  "JULIO",
  "AGOSTO",
  "SEPTIEMBRE",
  "OCTUBRE",
  "NOVIEMBRE",
  "DICIEMBRE",
];
const dias = [
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
  "SABADO",
  "DOMINGO",
];

const num = [
  ["1"],
  ["3"],
  ["2"],
  ["3"],
  ["1"],
  ["1"],
  ["1"],
  ["3"],
  ["2"],
  ["3"],
];

const Calendario: React.FC = () => {
  return (
    <>
      {meses.map((mes) => (
        <div className="calendario">
          <div className="fondo--nombre__mes">
            <h1 className="nombre__mes">{mes}</h1>
          </div>
          <div className="dias__mes">
            <Tabla titulos={dias} cuerpo={num} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Calendario;
