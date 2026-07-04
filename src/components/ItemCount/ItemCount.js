const ItemCount = ({ cantidad, setCantidad, max, addItem }) => {
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div className="item-count">
            <div className="item-count__qty">
                <button
                    type="button"
                    onClick={handleRestar}
                    className="item-count__btn item-count__btn--minus"
                    disabled={cantidad === 1}
                    aria-label="Quitar una unidad"
                >
                    −
                </button>
                <span className="item-count__label">
                    {cantidad} {cantidad === 1 ? 'unidad' : 'unidades'}
                </span>
                <button
                    type="button"
                    onClick={handleSumar}
                    className="item-count__btn item-count__btn--plus"
                    disabled={cantidad === max}
                    aria-label="Agregar una unidad"
                >
                    +
                </button>
            </div>
            <button type="button" className="item-count__add" onClick={addItem}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount
