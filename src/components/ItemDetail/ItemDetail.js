import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import '../ItemDetail/ItemDetail.scss'

const ItemDetail = ( {id, name, img, description, price, category, stock} ) => {

    const { agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const item = {
            id,
            name,
            stock,
            cantidad,
            price,
            img,
            category,
            description
        }
 
        agregarAlCarrito(item)
    }

    return (
        <div className="container">
            <h2>{name}</h2>
            <img className="imageDetail" src={img} />
            <br />
            <p className="container desc">{description}</p>
            <p className="precioCard">Precio: <b>USD {price}</b></p>
            <small>Categoría: {category}</small>
            <p><small>Stock: {stock}</small></p>
            { stock < 5 && <h6>Últimas unidades</h6> }

            {
                !isInCart(id) ? <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} addItem={handleAgregar} /> : <Link to="/cart" className="btn btn-success">Terminar la compra</Link>
            }
            <hr />

            <button className="btn btn-outline-primary btn-volver" onClick={handleVolver}>Volver</button>
        </div>
    ) 
}

export default ItemDetail 