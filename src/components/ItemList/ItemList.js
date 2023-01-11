import Item from "../Item/Item"


const ItemList = ( {productos}) => {

    return (
        <div className="container my-5">
            <h2>Productos</h2>
            <hr/>

            <section className="row my-4">
                { productos.map((prod) => <Item key={prod.id} prod={prod}/>)}
            </section>

        </div>
    )
}

export default ItemList