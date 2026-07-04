import Item from "../Item/Item"
import './ItemList.scss'

const ItemList = ({ productos, categoryLabel }) => {
    const title = categoryLabel ? categoryLabel : 'Nuestros productos'

    return (
        <div className="productos-list">
            <header className="productos-list__header">
                <h2 className="productos-list__title">{title}</h2>
                <p className="productos-list__count">
                    {productos.length} {productos.length === 1 ? 'producto' : 'productos'}
                </p>
            </header>

            {productos.length === 0 ? (
                <p className="productos-list__empty">No hay productos en esta categoría por el momento.</p>
            ) : (
                <div className="row g-3 g-md-4">
                    {productos.map((prod) => <Item key={prod.id} {...prod} />)}
                </div>
            )}
        </div>
    )
}

export default ItemList
