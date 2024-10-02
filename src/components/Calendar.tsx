// Calendar.tsx
import React, { useState } from "react";

// Función para obtener la cantidad de días en un mes específico
const getDaysInMonth = (year: number, month: number): number[] => {
  const date = new Date(year, month, 1);
  const days: number[] = [];
  while (date.getMonth() === month) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // Enero es 0, Febrero es 1, etc.

  // Obtener los días del mes actual
  const days = getDaysInMonth(year, 8);

  const semana = [
    "DOMINGO",
    "LUNES",
    "MARTES",
    "MIERCOLES",
    "JUEVES",
    "VIERNES",
    "SABADO",
  ];

  return (
    <div>
      {/* <h2>
        {currentDate.toLocaleDateString("es-ES", {
          month: "long",
          year: "numeric",
        })}
      </h2> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
        }}
      >
        {/* Renderizar los días */}

        {semana.map((dia) => (
          <div
            key={dia}
            style={{
              height: "1.8em",
              color: "orange",
              padding: "10px",
              border: "1px solid #ccc",
              textAlign: "center",
            }}
          >
            {dia}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day}
            style={{
              height: "4em",
              color: "black",
              padding: "10px",
              border: "1px solid #ccc",
              textAlign: "center",
            }}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
