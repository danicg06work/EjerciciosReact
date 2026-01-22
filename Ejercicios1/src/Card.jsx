import React from "react";

const Card = ({title, body, footer}) => {
    return (
        <>
            <h1>{title}</h1>
            <div>{body}</div>
            <h4>{footer}</h4>
        </>

    )
}

export default Card