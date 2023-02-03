import { useNavigate } from "react-router-dom"

const ItemDetail = ( {id, name, img, description, price, stock} ) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>{name}</h2>
            <img className="imageDetail" src={img} />
            <small>Categoría: {category}</small>
            <p>{description}</p>
            <p>Precio: <b>USD {price}</b></p>

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            {/* <ItemCount max={stock} /> */}
        </div>
    )
}

export default ItemDetail