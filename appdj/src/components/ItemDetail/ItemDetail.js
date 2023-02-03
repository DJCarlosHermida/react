import { useNavigate } from "react-router-dom"
import '../ItemDetail/ItemDetail.scss'

const ItemDetail = ( {id, name, img, description, price, category, stock} ) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
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

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            {/* <ItemCount max={stock} /> */}
        </div>
    )
}

export default ItemDetail 