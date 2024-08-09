import { Link } from "react-router-dom";
import "./Form.css";

function Form() {
  return (
    <form className="form-login">
      <div className="div-user">
        <label className="form-label">Usuario </label>
        <input type="text" className="form-input" id="text-login" />
      </div>
      <div className="div-pass">
        <label className="form-label">Contraseña </label>
        <input
          type="password"
          className="form-input"
          id="exampleInputPassword1"
        />
      </div>
      <Link to={"/menu/:id"}>
        <button type="submit" className="btn btn-login">
          Iniciar
        </button>
      </Link>
    </form>
  );
}

export default Form;
