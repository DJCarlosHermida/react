import { createContext, useContext,  useState, useEffect } from "react";

export const CartContext = createContext()
export const useCartContext = () => {
  return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(init)

    const agregarAlCarrito = (Item) => {
      setCart([...cart, Item])
    }

    const removeItem = (id) => {
      setCart(cart.filter(item => item.id !== id))
    }

    const updateItemQuantity = (id, cantidad) => {
      if (cantidad <= 0) {
        setCart(cart.filter(item => item.id !== id))
        return
      }
      setCart(
        cart.map((item) => {
          if (item.id !== id) return item
          const max = item.stock ?? cantidad
          return { ...item, cantidad: Math.min(cantidad, max) }
        })
      )
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
    }, [cart])
    
    return (

        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            removeItem,
            updateItemQuantity,
            isInCart,
            emptycart,
            totalCart,
            totalCantidad
        }}>
            {children}
        </CartContext.Provider>

    )
}