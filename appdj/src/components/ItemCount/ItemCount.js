import { useState } from "react"
 
const ItemCount = ({cantidad, setCantidad, max, addItem}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad -1)
    }
    
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad +1)
    } 
    
    return (

        <div>
            <button onClick={handleRestar} className="btn btn-outline-danger">-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-outline-success">+</button>
            <br />
            <button className="btn btn-outline-success my-3" onClick={addItem}>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount