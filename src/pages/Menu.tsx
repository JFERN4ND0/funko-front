import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <>
      <Link to={"/lista/:id"}>
        <button type="button" className="btn btn-option">
          <img src="../fantasma.png" className="img_btn"></img>
          Lista
        </button>
      </Link>
      <Link to={"/agregar/:id"}>
        <button type="button" className="btn btn-option">
          <img src="../fantasma.png" className="img_btn"></img>
          Agregar
        </button>
      </Link>
    </>
  );
}

export default Menu;
