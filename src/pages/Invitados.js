import { MDBBtn, MDBBtnGroup, MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";
import ButtonAgregarInvitado from "../components/AgregarInvitado/ButtonAgregarInvitado";
import Content from "../components/Content/Content";


function Invitados() {
  const [InvitadosData, setInvitadosData] = useState([]);
  return (
    <div>
      <div className="page-content">
        <Content site="Invitados" modulo="Celebraciones" />
        <div className="page-component">
        <div className="action-top-grid">
            <div class="form-outline">
              <input type="text" id="formControlDefault" class="form-control" />
              <label class="form-label" for="formControlDefault">
                Buscar Invitados
              </label>
            </div>
            <ButtonAgregarInvitado/>
          </div>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre y Apellido</th>
                  <th scope="col">¿Asitió?</th>
                  <th scope="col">¿Está en la fista?</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {InvitadosData.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.nombre + item.apellido}</td>
                      <td>{item.asistencia ? "Asistió" : "Faltó"}</td>
                      <td>{item.enlafiesta ? "Está en la fiesta":  "No está en la fiesta"}</td>
                      <td>
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

export default Invitados;
