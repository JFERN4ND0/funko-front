import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./pages/Menu.tsx";
import Lista from "./pages/Lista.tsx";
import AgregarView from "./pages/AgregarView.tsx";
import VentasView from "./pages/VentasView.tsx";
import RegistroView from "./pages/RegistroView.tsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/lista",
    element: <Lista />,
  },
  {
    path: "/agregarFunko",
    element: <AgregarView />,
  },
  {
    path: "/venta",
    element: <VentasView />,
  },
  {
    path: "/registroVentas",
    element: <RegistroView />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
