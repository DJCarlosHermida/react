

const Item = ( {id, stock, name, description, img, price, Category} ) => {

    return (
        <div className="card" >
            <img src={img} className="image" alt={name} title={name}  />
            <h4 className="prodcutosName"><i>{name}</i></h4>
            <p className="price"><b>USD {price}</b></p>
            <button className="btn-VerMas">Ver Detalle</button>
        </div>
    )
}

export default Item