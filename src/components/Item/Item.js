import { Link } from 'react-router-dom'

const Item = ( {id, stock, name, description, img, price, category} ) => {

    return (
        <div className="card" >
            <img src={img} className="image" alt={name} title={name}  />
            <h4 className="prodcutosName"><i>{name}</i></h4>
            <p className="price"><b>USD {price}</b></p>
            <Link to={`/detail/${id}`} className="btn-VerMas"><i>Ver Detalle</i></Link>
        </div>
      
    )
}

export default Item