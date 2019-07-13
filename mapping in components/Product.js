import React from "react"

function Product(props){
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h5>Price: {props.price}</h5>
            <p>Description: {props.description}</p>
            <hr />
        </div>
    )
}

export default Product