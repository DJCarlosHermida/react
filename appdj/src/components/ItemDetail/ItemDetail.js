import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import '../ItemDetail/ItemDetail.scss'

const ItemDetail = ( {id, name, img, description, price, category, stock} ) => {
    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        console.log(
            id,
            name,
            img,
            description,
            price,
            category,
            stock,
            cantidad
        )
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

            <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} addItem={handleAgregar} />
            <br />

            <button className="btn btn-outline-primary btn-volver" onClick={handleVolver}>Volver</button>
        </div>
    ) 
}

export default ItemDetail 