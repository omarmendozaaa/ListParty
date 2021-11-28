import React from "react";
import "./Navbar.css";
import { EventosData } from "./EventosData";
import mainicon from "./party-popper.png";
import { useNavigate } from "react-router";

function Navbar({showSidebar, setIdEvento, SetUser}) {
  let navigate = useNavigate()
  const handleLogout = (event) => {
    event.preventDefault();
    window.localStorage.removeItem("loggedUser");
    SetUser(null)
    navigate('../login', { replace: true });
  };
  return (
    <header className="header">
        <div className=".MainIconNav" onClick={showSidebar}>
          <img className="IconNav" src={mainicon} alt="Party"></img>
        </div>
      <div className="evento">
        <select
          className="custom-select form-control select-evento"
          onChange={(e) => {
            setIdEvento(e.target.value.toString());
          }}
        >
          {EventosData.map((item) => {
            return item.id === localStorage.IdEvento ? (
              <option value={item.id} selected>
                {item.nombre}
              </option>
            ) : (
              <option value={item.id}>{item.nombre}</option>
            );
          })}
        </select>
        {console.log(localStorage.IdEvento)}
      </div>
      <div className="logOut" onClick={handleLogout}>
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
    </header>
  );
}

export default Navbar;
