

const Item = ( {id, stock, name, description, img, price, Category} ) => {

    return (
        <div className="card" >
            <h4 className="prodcutosName">{name}</h4>
            <img className="image" alt="P arlante" title={name} src={img} />
            <p className="description">{description}</p>
            <p className="price"><b>USD {price}</b></p>
            <button className="btn btn-outline-primary">Ver Más</button>
        </div>
    )
}

export default Item