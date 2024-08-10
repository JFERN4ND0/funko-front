import "./Lista.css";

function Lista() {
  return (
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
  );
}

export default Lista;
