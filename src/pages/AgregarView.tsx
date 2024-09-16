import "./Agregar.css";

function AgregarView() {
  return (
    <form className="form__login">
      <div className="div--campo">
        <label className="form--label form__agregar">Descripcion</label>
        <textarea className="form--textarea" id="text-login"></textarea>
      </div>
      <div className="div--campo">
        <label className="form--label form__agregar">Inversor</label>
        <select name="Inversor" className="form--select">
          <option value="Andrei">ANDREI</option>
          <option value="Fer">FER</option>
          <option value="zucarita">Zucarita</option>
        </select>
      </div>
      <div className="div--campo">
        <label className="form--label form__agregar">Precio compra</label>
        <input type="text" className="form--input" id="text-login" />
      </div>
      <div className="div--campo">
        <label className="form--label form__agregar">Precio venta</label>
        <input type="text" className="form--input" id="text-login" />
      </div>
      <div className="div--campo">
        <label className="form--label form__agregar">Cantidad</label>
        <input type="text" className="form--input" id="text-login" />
      </div>
      <button type="submit" className="btn btn-login">
        Guardar
      </button>
    </form>
  );
}
export default AgregarView;
