import React, { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../Services/LoginService";
import "./Login/Login.css";

function Login({ SetUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    await login({ username, password })
      .then((user) => {
        window.localStorage.setItem("loggedUser", JSON.stringify(user));
        window.localStorage.setItem(
          "EventoId",
          JSON.stringify(
            user.eventos[0] === undefined ? "" : user.eventos[0].evento.id
          )
        );
        SetUser(user);
        navigate("../dashboard", { replace: true });
      })
      .catch((err) => {
        console.log("Usuario o contraseña invalido");
      });
  };
  return (
    <div className="container-login">
      <div className="container-form">
        <h1>Iniciar Sesión</h1>
        <form>
          <div className="txt_field">
            <input
              type="text"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <span />
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              className="txt-input"
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span />
            <label>Contraseña</label>
          </div>
          <button className="btn-login" onClick={handleLogin}>Iniciar Sesión</button>
        </form>
        <label className="crear-cuenta">¿Aún no tienes una cuenta? Solicitala <a href="https://wa.me/51991905743"> aquí </a></label>
      </div>
    </div>
  );
}

export default Login;
