import React from "react";
import "./Navbar.css";
import mainicon from "./party-popper.png";
import { useNavigate } from "react-router";
import { useEventos } from "../../Hooks/useEventos";

function Navbar({ showSidebar, SetUser }) {
  let navigate = useNavigate();
  const { Eventos } = useEventos();
  console.log(Eventos)
  const handleLogout = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    SetUser(null);
    navigate("../login", { replace: true });
  };
  const CambiarEvento = (NuevoEventoId) => {
    window.localStorage.setItem("EventoId", JSON.stringify(NuevoEventoId));
  };
  return (
    <header className="header">
      <div className=".MainIconNav" onClick={showSidebar}>
        <img className="IconNav" src={mainicon} alt="Party"></img>
      </div>
      <div className="evento">
        {Eventos[0] === undefined ? (
          <div>
            <button>Agregar Evento </button>
          </div>
        ) : (
          <select
            className="custom-select form-control select-evento"
            onChange={(e) => {
              CambiarEvento(e.target.value.toString());
            }}
          >
            {Eventos.map((item) => {
              return item.evento.id === localStorage.IdEvento ? (
                <option value={item.evento.id} selected>
                  {item.evento.nombre}
                </option>
              ) : (
                <option value={item.evento.id}>{item.evento.nombre}</option>
              );
            })}
          </select>
        )}
      </div>
      <div className="logOut" onClick={handleLogout}>
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
    </header>
  );
}

export default Navbar;
