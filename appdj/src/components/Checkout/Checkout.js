import { useState } from "react"

const Checkout = () => {
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
        console.log(values);
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