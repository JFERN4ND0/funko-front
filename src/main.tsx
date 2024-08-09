import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./pages/menu.tsx";
import Lista from "./pages/Lista.tsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu/:id",
    element: <Menu />,
  },
  {
    path: "/lista/:id",
    element: <Lista />,
  },
  {
    path: "/agregar/:id",
    element: <Menu />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
