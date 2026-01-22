import React from "react";

const ListarDeportes = ({ deportes }) => {
  return (
    <ol>
      {deportes.map((deporte, i) => (
        <li key={i}>
          <p>Número: {i + 1}</p>
          <p>Nombre: {deporte.nombre}</p>
          <p>Popularidad: {deporte.popularidad}</p>
          <p>Es de equipo: {deporte.esDeEquipo ? "Si" : "No"}</p>
        </li>
      ))}
    </ol>
  )
}

export default ListarDeportes