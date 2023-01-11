
import { useNavigate } from "react-router-dom"

const ItemDetail = ( {id, name, stock, category, image, description, price} ) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src={image}/>
            <br/>
            <small>Categoría: {category}</small>
            <p>{description}</p>
            <p>Precio: ${price}</p>

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            {/* <ItemCount max={stock}/> */}
        </div>
    )
}

export default ItemDetail