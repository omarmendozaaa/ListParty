import { MDBBtn } from "mdb-react-ui-kit";
import React, { useState } from "react";

function ButtonAgregarInvitado() {
const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  return (
    <div>
      <MDBBtn
        class="btn btn-secondary"
        onClick={toggleShow}
        style={{ backgroundColor: "#57419d" }}
      >
        Agregar Invitado
      </MDBBtn>
    </div>
  );
}

export default ButtonAgregarInvitado;
