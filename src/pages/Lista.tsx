import { Link } from "react-router-dom";
import "./Lista.css";
import Tabla from "../components/Tabla";

const titulos = [
  "Piezas",
  "Imagen",
  "Descripcion",
  "PrecioC",
  "PrecioVenta",
  "Ganancia",
];

function Lista() {
  return (
    <div className="vista__tabla">
      <div className="head__list">
        <input className="filtro"></input>
        <button type="button" className="btn btn_act btn_filtro">
          Filtrar
        </button>
        <Link to={"/agregarFunko"}>
          <button type="button" className="btn btn_act btn_agregar">
            agregar
          </button>
        </Link>
      </div>
      <Tabla titulos={titulos}></Tabla>
    </div>
  );
}

export default Lista;
