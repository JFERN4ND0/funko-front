import Calendar from "./Calendar";
import "./Calendario.css";

const Calendario: React.FC = () => {
  return (
    <>
      <div className="calendario">
        <div className="fondo--nombre__mes">
          <h1 className="nombre__mes">SEPTIEMBRE</h1>
        </div>
        <div className="dias__mes">
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default Calendario;
