import React from "react";
import Content from "../components/Content/Content";

function Dashboard({IdEvento}) {
  return (
    <div>
      <div className="page-content">
        <Content site="Dashboard" modulo="Bienvenido" />
        <div className="page-component">
          <h1>{IdEvento}</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
