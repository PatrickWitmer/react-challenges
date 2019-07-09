import React from 'react'

function Product(props) {
    return (
        <section>
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Description: {props.description}</p>
        </section>
    )
}

export default Product