import { MDBBtn, MDBBtnGroup, MDBIcon } from "mdb-react-ui-kit";
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
                        <MDBBtnGroup size='lg' aria-label='Basic example' shadow='0'>
                          <MDBBtn color="link">
                            <MDBIcon size='lg' fab icon="whatsapp" />
                          </MDBBtn>
                          <MDBBtn color="link">
                            <MDBIcon size='lg' fas icon="fas fa-pen" />
                          </MDBBtn>
                          <MDBBtn color="link">
                            <MDBIcon size='lg' fas icon="trash-alt" />
                          </MDBBtn>
                        </MDBBtnGroup>
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
