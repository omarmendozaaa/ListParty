import { Input } from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import {
  MDBBtn,
  MDBValidation,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBInput,
} from "mdb-react-ui-kit";

import React, { useState } from "react";

function ButtonAgregarEvento() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [Evento, SetEvento] = useState({
    nombre: String,
    lugar: String,
    fecha: Date,
  });
  const [FechayHora, SetFechayHora] = useState(new Date())

  const onChange = (e) => {
    SetEvento({ ...Evento, [e.target.name]: e.target.value });
  };
  
  return (
    <div>
      <MDBBtn
        class="btn btn-secondary"
        onClick={toggleShow}
        style={{ backgroundColor: "#57419d" }}
      >
        Agregar Evento
      </MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Agregar Evento</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBValidation className="row g-3" noValidate>
                <MDBInput
                  value={Evento.nombre}
                  name="nombre"
                  onChange={onChange}
                  required
                  label="Nombre del evento"
                  validation="Se ve bien!"
                />
                <br />
                <MDBInput
                  value={Evento.lugar}
                  name="lugar"
                  onChange={onChange}
                  required
                  label="¿En dónde es el tono?"
                  validation="Buen lugar!"
                />
                <div></div>
                <DateTimePicker
                  inputVariant="outlined"
                  name="fecha"
                  value={FechayHora}
                  onChange={SetFechayHora}
                  helperText="Fecha y Hora"
                />
              </MDBValidation>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                onClick={toggleShow}
                style={{ backgroundColor: "#57419d" }}
              >
                Cerrar
              </MDBBtn>
              <MDBBtn onClick={toggleShow}>Guardar</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default ButtonAgregarEvento;
