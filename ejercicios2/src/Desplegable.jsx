import React, { useState } from "react";

const Desplegable = ({ titulo, children }) => {
  const [estado, setEstado] = useState("oculto");

  function desplegar() {
    setEstado(estado === "oculto" ? "visible" : "oculto");
  }

  return (
    <div>
      <h2 onClick={desplegar} style={{ cursor: "pointer" }}>{titulo}</h2>
      {estado === "visible" && <div>{children}</div>}
    </div>
  );
};

export default Desplegable;
