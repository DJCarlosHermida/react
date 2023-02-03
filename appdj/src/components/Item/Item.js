import { Link } from 'react-router-dom'

const Item = ( {id, stock, name, description, img, price, category} ) => {

    return (
        <div className="card" >
            <img src={img} className="image" alt={name} title={name}  />
            <h4 className="prodcutosName"><i>{name}</i></h4>
            <p className="price"><b>USD {price}</b></p>
            <small>Categoría: {category}</small>
            <Link to={`/detail/${id}`} className="btn-VerMas">Ver Detalle</Link>
        </div>
      
    )
}

export default Item