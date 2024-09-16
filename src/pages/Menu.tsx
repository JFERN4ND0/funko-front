import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-fondo">
      <h2 className="menu-titulo">EL FANTASMA DE LOS FUNKOS</h2>
      <div className="menu-fondo-btn">
        <Link className="menu-fondo-btn" to={"/lista"}>
          <button type="button" className="btn btn-option">
            <img src="../Lista.png" className="img_btn btn__lista"></img>
            <span className="btn-texto">Lista DE FUNKOS</span>
          </button>
        </Link>
        <Link className="menu-fondo-btn" to={"/venta"}>
          <button type="button" className="btn btn-option">
            <img src="../Ventas.png" className="img_btn btn__ventas"></img>
            <span className="btn-texto">Ventas</span>
          </button>
        </Link>
        <Link className="menu-fondo-btn" to={"/registroVentas"}>
          <button type="button" className="btn btn-option">
            <img src="../Registro.png" className="img_btn btn__registro"></img>
            <span className="btn-texto">Registro</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
