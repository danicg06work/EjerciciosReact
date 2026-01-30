import React from "react"
import "./UserCard.css"

const UserCard = ({ foto, nombre, apellidos, fNacimiento, descripcion, company }) => {
    return (
        <div className="user-card">
            <img className="user-card__img" src={foto}></img>
            <h2 className="user-card__name"> {nombre}, {apellidos}</h2>
            <p className="user-card__birth">{fNacimiento}</p>
            <p className="user-card__desc">{descripcion}</p>
            <p className="user-card__company">{company}</p>
        </div>
    )
}

export default UserCard
