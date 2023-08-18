import { useContext } from 'react'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

const CartWidget = () => {

    const { totalCantidad, cart } = useContext(CartContext)

    return (

        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <BsCart />            
            <span className='container'>{totalCantidad() }</span>
        </Link>
    )
}

export default CartWidget