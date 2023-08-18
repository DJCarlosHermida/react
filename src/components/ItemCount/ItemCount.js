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
            <button onClick={handleRestar} className={cantidad > 1 ? 'btn btn-outline-danger' : 'btn btn-outline-secondary'} disabled={cantidad === 1}>-</button>
            <span className="mx-3">{cantidad} {cantidad === 1 ? 'Unidad' : 'Unidades'}</span>
            <button onClick={handleSumar} className={cantidad < max ? 'btn btn-outline-success' : 'btn btn-outline-secondary'} disabled={cantidad === max}>+</button>
        
            <br /> 
            <button className="btn btn-outline-success my-3" onClick={addItem}>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount