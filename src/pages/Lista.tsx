import { Link } from "react-router-dom";
import "./Lista.css";

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
      <table className="table-funkos">
        <thead>
          <tr>
            <th scope="col" className="table__head">
              Piezas
            </th>
            <th scope="col" className="table__head">
              Personaje
            </th>
            <th scope="col" className="table__head">
              Descripcion
            </th>
            <th scope="col" className="table__head">
              PC
            </th>
            <th scope="col" className="table__head">
              PV
            </th>
            <th scope="col" className="table__head">
              GF
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Lista;
