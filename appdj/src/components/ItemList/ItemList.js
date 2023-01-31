import Item from "../Item/Item"

const ItemList = ({ productos }) => {

    return (
        <div className="container my-5">
            <h2 className="productosTitle">Nuestros Productos</h2>
            <hr />

            <section className="row my-4">
                {productos.map((productos) =><Item key={productos.id} {... productos} />
                )}
            </section>

        </div>
    )
}

export default ItemList