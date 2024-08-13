import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <>
      <Link to={"/lista"}>
        <button type="button" className="btn btn-option">
          <img src="../fantasma3D.png" className="img_btn btn__lista"></img>
          Lista
        </button>
      </Link>
      <Link to={"/venta"}>
        <button type="button" className="btn btn-option">
          <img src="../fantasma3D.png" className="img_btn btn__ventas"></img>
          Ventas
        </button>
      </Link>
      <Link to={"/registroVentas"}>
        <button type="button" className="btn btn-option">
          <img src="../fantasma3D.png" className="img_btn btn__registro"></img>
          Registro
        </button>
      </Link>
    </>
  );
}

export default Menu;
