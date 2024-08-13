import { Link } from "react-router-dom";
import "./Agregar.css";

function AgregarView() {
  // pageActive = "login";
  return (
    <form className="form-login">
      <div className="div-user">
        <label className="form-label form__agregar">Descripcion</label>
        <input type="text" className="form-input" id="text-login" />
      </div>
      <div className="div-user">
        <label className="form-label form__agregar">Inversor</label>
        <input type="text" className="form-input" id="text-login" />
      </div>
      <div className="div-user">
        <label className="form-label form__agregar">Precio compra</label>
        <input type="text" className="form-input" id="text-login" />
      </div>
      <div className="div-user">
        <label className="form-label form__agregar">Precio venta</label>
        <input type="text" className="form-input" id="text-login" />
      </div>
      <div className="div-user">
        <label className="form-label form__agregar">Cantidad</label>
        <input type="text" className="form-input" id="text-login" />
      </div>
      <Link to={"/menu"}>
        <button type="submit" className="btn btn-login">
          Guardar
        </button>
      </Link>
    </form>
  );
}
export default AgregarView;
