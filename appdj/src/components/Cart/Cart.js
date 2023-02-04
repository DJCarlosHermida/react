import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsTrash } from "react-icons/bs"

const Cart = () => {

    const { cart, emptycart, totalCart, removeItem } = useContext(CartContext )


    return (
        <div className="container my-4">
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

            <h4>Total: USD { totalCart() } </h4>


            <button className="btn btn-outline-danger" onClick={emptycart}>Vaciar Carrito</button>
        </div>

    )
}

export default Cart