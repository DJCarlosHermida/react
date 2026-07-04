import Item from "../Item/Item"

const ItemList = ({ productos, categoryLabel }) => {
    const title = categoryLabel ? categoryLabel : 'Nuestros Productos'

    return (
        <div className="productos-list">
            <h2 className="productosTitle">{title}</h2>
            <hr />

            {productos.length === 0 ? (
                <p className="productos-list__empty">No hay productos en esta categoría por el momento.</p>
            ) : (
                <section className="row my-4">
                    {productos.map((prod) => <Item key={prod.id} {...prod} />)}
                </section>
            )}
        </div>
    )
}

export default ItemList
