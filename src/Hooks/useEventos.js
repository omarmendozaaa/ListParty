import { useEffect, useState } from "react";

export const useEventos = () => {
  const [Eventos, SetEventos] = useState([]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      SetEventos(user.eventos);
    }
  }, []);

  return {
    Eventos,
  };
};
