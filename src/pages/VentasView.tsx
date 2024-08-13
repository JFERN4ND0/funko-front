import Tabla from "../components/Tabla";

const tTabla = ["Cant", "descripcion", "PxP", "PxT"];

function VentasView() {
  return (
    <div className="vista__tabla">
      <div className="head__list">
        <input className="filtro"></input>
        <button type="button" className="btn btn_act btn_agregar">
          agregar
        </button>
      </div>
      <Tabla titulos={tTabla}></Tabla>
    </div>
  );
}

export default VentasView;
