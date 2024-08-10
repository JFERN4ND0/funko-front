import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <>
      <Link to={"/lista"}>
        <button type="button" className="btn btn-option">
          <img src="../fantasma.png" className="img_btn"></img>
          Lista
        </button>
      </Link>
      <Link to={"/ventas"}>
        <button type="button" className="btn btn-option">
          <img src="../fantasma.png" className="img_btn"></img>
          Ventas
        </button>
      </Link>
      <Link to={"/ventasregistro"}>
        <button type="button" className="btn btn-option">
          <img src="../fantasma.png" className="img_btn"></img>
          Registro
        </button>
      </Link>
    </>
  );
}

export default Menu;
