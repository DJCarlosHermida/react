import { useState } from 'react'
import '../Navbar/Navbar.scss'
import './Contacto.scss'

const Contacto = () => {
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        phone: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Submit', values)

    }

    return (
        <div className="container my-5 form">
            <h2 className='productosTitle'>Formulario de contacto</h2>

            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={values.nombre} name="nombre" type="text" className="form-control my-2" placeholder="Nombre"></input>
                <input onChange={handleInputChange} value={values.email} name="email" type="email" className="form-control my-2" placeholder="Email" ></input>
                <input onChange={handleInputChange} value={values.phone} name="phone" type="phone" className="form-control my-2" placeholder="Cel" ></input>
                <hr />
                <button className='btn btn-outline-success'>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto 