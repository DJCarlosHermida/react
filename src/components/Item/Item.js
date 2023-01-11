 

const Item = ({name, img, description, price, id}) => {
    return (
        <div className="col-4">
            <h4>{prod.name}</h4>
            <img className="image" src={prod.img} alt={prod.name} />
            <p className="container">{prod.description}</p>
            <p>Precio: <b>USD {prod.price}</b></p>
            <button className="btn btn-outline-primary">Ver Más</button>
        </div>
    )
}

export default Item