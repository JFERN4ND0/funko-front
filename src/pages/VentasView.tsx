import Calendario from "../components/Calendario";
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
          <div className="andrei">
            <div className="color rojo"></div>
            <span></span>
          </div>
          <div className="fer">
            <div className="color amarillo"></div>
            <span></span>
          </div>
          <div className="kukarita">
            <div className="color azul"></div>
            <span></span>
          </div>
        </div>
        <div className="info"></div>
      </div>
    </div>
  );
}

export default VentasView;
