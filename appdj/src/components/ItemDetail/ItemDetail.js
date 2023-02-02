

const ItemDetail = ( {id, name, img, description, price} ) => {

    return (
        <div>
            <h2>{name}</h2>
            <img className="imageDetail" src={img} />
            <p>{description}</p>
            <p>Precio: <b>USD {price}</b></p>
            <p><small><i>Stock: {stock}</i></small></p>
        </div>
    )
}

export default ItemDetail