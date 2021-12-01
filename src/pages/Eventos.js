import React from "react";
import ButtonAgregarEvento from "../components/AgregarEvento/ButtonAgregarEvento";
import Content from "../components/Content/Content";
import { useEventos } from "../Hooks/useEventos";

function Eventos() {
  const { Eventos } = useEventos();
  return (
    <div>
      <div className="page-content">
        <Content site="Eventos" modulo="Celebraciones" />
        <div className="page-component">
          <div className="action-top-grid">
            <div class="form-outline">
              <input type="text" id="formControlDefault" class="form-control" />
              <label class="form-label" for="formControlDefault">
                Buscar Eventos
              </label>
            </div>
            <ButtonAgregarEvento />
          </div>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Lugar</th>
                  <th scope="col">Fecha y Hora</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {Eventos.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.evento.nombre}</td>
                      <td>{item.evento.lugar}</td>
                      <td>{item.evento.fecha}</td>
                      <td>{item.rol}</td>
                      <td>
                      <div class="btn-group shadow-0 btn-group-lg" role="group" aria-label="Basic example">
                          <button
                            type="button"
                            class="btn btn-link btn-sm px-3 btn-lg"
                          >
                            <i class="fab fa-whatsapp"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-link btn-sm px-3 btn-lg"
                          >
                            <i class="fas fa-pen"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-link btn-sm px-3 btn-lg"
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventos;
