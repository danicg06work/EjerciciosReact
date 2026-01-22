import React from "react";


const ButtonHandler = ()=>{
    alert("PULSADO!!")
}

const Button =({texto})=>{
    return (
        <button onClick={ButtonHandler}>{texto}</button>
    )
}

export default Button