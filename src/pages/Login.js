import React, { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../Services/LoginService";

function Login({ SetUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    await login({ username, password })
      .then((user) => {
        window.localStorage.setItem("loggedUser", JSON.stringify(user));
        window.localStorage.setItem("EventoId", JSON.stringify(user.eventos[0] === undefined ? "" : user.eventos[0].evento.id));
        SetUser(user);
        navigate("../dashboard", { replace: true });
      })
      .catch((err) => {
        console.log("Usuario o contraseña invalido");
      });
  };
  return (
    <form>
      <div>
        <label>username:</label>
        <input
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        <label>contraseñá:</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button onClick={handleLogin}>Login</button>
    </form>
  );
}

export default Login;
