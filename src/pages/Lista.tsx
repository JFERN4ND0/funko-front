import { Link } from "react-router-dom";
import "./Lista.css";
import Tabla from "../components/Tabla";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";

const Lista: React.FC = () => {
  const [busqueda, setbusqueda] = useState<"Buscar">();

  const titulos = [
    "Piezas",
    "Nombre",
    "Estatus",
    "Pertenece",
    "PrecioC",
    "PrecioV",
    "Ganancia",
  ];

  return (
    <div className="vista__tabla">
      <div className="logo-lista-fondo">
        <img className="icono-lista" src="./Lista.png" alt="icon-lista" />
        <span className="texto-listalogo">LISTA DE FUNKOS</span>
      </div>
      <div className="fondovista__lista">
        <div className="head__list">
          <div className="filtrofondo">
            <input className="filtro-input" value={busqueda}></input>
            <button type="button" className="btn-lupa">
              <BiSearchAlt className="lupa" />
            </button>
          </div>
          <Link to={"/agregarFunko"}>
            <button type="button" className="btn btn_act btn_agregar">
              agregar
            </button>
          </Link>
        </div>
        <div className="fondotabla__lista">
          <Tabla titulos={titulos} cuerpo={[]}></Tabla>
        </div>
      </div>
    </div>
  );
};

export default Lista;
