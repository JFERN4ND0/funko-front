import "./Registro.css";
import Tabla from "../components/Tabla";

const titulos = [
  "Piezas",
  "Imagen",
  "Descripcion",
  "PCompra",
  "PVenta",
  "Ganancia",
];

function RegistroView() {
  return (
    <div className="vista__tabla">
      <div className="head__list">
        <input className="filtro"></input>
        <button type="button" className="btn btn_act btn_agregar">
          FILTRAR
        </button>
      </div>
      <Tabla titulos={titulos}></Tabla>
    </div>
  );
}

export default RegistroView;
