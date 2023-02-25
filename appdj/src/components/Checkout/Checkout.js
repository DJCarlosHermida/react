import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCardContext as useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const { cart,totalCart, emptycart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        edad: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 3) {
            alert("Nombre Inválido")
            return
        }

        if (values.edad.length < 1) {
            alert("Edad incorrecta")
            return
        }

        if (values.email.length < 2) {
            alert("Email Inválido")
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
        }
     
        const orderRef = collection(db, 'orders')

        addDoc(orderRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                emptycart()
            })
            .catch((error) => console.log(error) )
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Compra Realizada Con Éxito</h2>
                <hr />
                <p>Orden De Compra: {orderId} </p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div classname="container my-5">
            <h2 className="container my-5">Terminar Compra</h2>
            <hr />
            <form onSubmit={handleSubmit} className="container">

                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="text"
                    name="nombre"
                    value={values.nombre}
                    placeholder="Nombre"
                />

                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="number"
                    name="edad"
                    value={values.edad}
                    placeholder="Edad"
                />
                
                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="Email"
                />

                <button className="btn btn-outline-success">Enviar</button>

            </form>

        </div>
    )
}

export default Checkout