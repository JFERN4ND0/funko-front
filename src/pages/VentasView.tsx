import Calendar from "../components/Calendar.tsx";
import Calendario from "../components/Calendario";
import MyApp from "../components/MyApp.tsx";
import "./Ventas.css";

function VentasView() {
  return (
    <div className="vista__tabla vista__ventas">
      <div className="logo-lista-fondo">
        <img className="icono-lista" src="./Ventas.png" alt="icon-ventas" />
        <span className="texto-listalogo">VENTAS</span>
      </div>
      <div className="fondovista__lista fondovista__ventas">
        <div className="fondotabla__lista fondo__calendario">
          <Calendario />
        </div>
        <div className="info">
          <div className="colores">
            <div className="subtotal andrei">
              <div className="color rojo"></div>
              <span>Subtotal Parzy: </span>
            </div>
            <div className="subtotal cucarita">
              <div className="color azul"></div>
              <span>Subtotal Cucara: </span>
            </div>
            <div className="subtotal fer">
              <div className="color verde"></div>
              <span>Subtotal Fer: </span>
            </div>
          </div>
          <div className="info__total">TOTAL: $</div>
        </div>
      </div>
    </div>
  );
}

export default VentasView;
