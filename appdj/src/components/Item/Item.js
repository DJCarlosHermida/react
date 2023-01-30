

const Item = ( {productos} ) => {

    return (
        <div className="card" >
            <h4 className="prodcutosName">{productos.name}</h4>
            <img className="image" alt="Parlante" title={productos.name} src={productos.img} />
            <p className="description">{productos.description}</p>
            <p className="price"><b>USD {productos.price}</b></p>
        </div>
    )
}

export default Item