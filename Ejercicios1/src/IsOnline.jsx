import React from "react";

const isOnline = ({estado})=>{

    if(estado){
        return (
            <div><h1>CONECTADOOO!!!</h1></div>
        )
    }else{
        return (
            <div><h1>NO CONECTADO</h1></div>
        )
    }
}

export default isOnline