import "./Tabla.css";

interface Props {
  titulos: String[];
  cuerpo: String[][];
}

function Tabla({ titulos, cuerpo }: Props) {
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
      <tbody>
        {cuerpo.map((filas) => (
          <tr>
            {filas.map((campos) => (
              <td>{campos}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
