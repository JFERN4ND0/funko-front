import "./Tabla.css";

interface Props {
  titulos: String[];
}

function Tabla({ titulos }: Props) {
  return (
    <table className="table-funkos">
      <thead>
        <tr>
          {titulos.map((titulo) => (
            <th scope="col" className="table__head">
              {titulo}
            </th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default Tabla;
