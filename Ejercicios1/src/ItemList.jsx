import React from "react";

const ItemList  = ({items}) =>{

    let lista = []
    for (const item of items) {
        lista.push(<li>{item}</li>)
    }
return(
    <ul>
        {lista}
    </ul>
)
}

export default ItemList