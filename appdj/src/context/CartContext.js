import { createContext, useContext,  useState, useEffect } from "react";

export const CartContext = createContext()


export const useCardContext = () => {
  return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(init)
    console.log(cart)

    const agregarAlCarrito = (Item) => {
      setCart([...cart, Item])
    }

    const removeItem = (id) => {
      setCart( cart.filter(item => item.id !== id) ) 
    }

    const isInCart = (id) => {
      return cart.some(item => item.id === id)
    }

    const emptycart = () => {
      setCart([])
    }

    const totalCart = () => {
      return cart.reduce((add, item) => add + item.price * item.cantidad, 0)
    }

    const totalCantidad = () => {
      return cart.reduce((add, item) => add + item.cantidad, 0)
    }

    useEffect(() =>{
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart] )
    
    return (

        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            removeItem,
            isInCart,
            emptycart,
            totalCart,
            totalCantidad
        }}>
            {children}
        </CartContext.Provider>

    )
}