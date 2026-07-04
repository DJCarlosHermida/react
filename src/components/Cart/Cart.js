import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { LoginContext } from "../../context/LoginContext"
import { BsTrash } from "react-icons/bs"
import { Link, Navigate } from "react-router-dom"

const Cart = () => {

    const { cart, emptycart, totalCart, removeItem } = useContext(CartContext)
    const { user } = useContext(LoginContext)

    if (!user.logged) {
        return <Navigate to="/login" state={{ from: '/cart' }} replace />
    }

    if (cart.length === 0) {
        return (
            <div className="container my-4">
                <h2>Carrito vacío</h2>
                <hr />
                <p>Para comprar primero debes agregar algo</p>
                <Link to="/productos" className="btn btn-outline-danger">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-4" >
            <h2>Tu Compra</h2>
            <hr />

            {
                cart.map(item => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: $ {item.price}</p>
                        <button onClick={() => removeItem(item.id)} className="btn btn-outline-danger"><BsTrash /></button>
                        <hr />

                    </div>
                ))
            }

            <h4>Total: USD {totalCart()} </h4>
            <button className="btn btn-outline-danger" onClick={emptycart}>Vaciar Carrito</button>
            <Link className="btn btn-outline-success my-4 mx-3" to="/checkout">Terminar compra</Link>
            <br />
            <Link to="/productos" className="btn btn-outline-danger">Volver</Link>
        </div>

    )
}

export default Cart