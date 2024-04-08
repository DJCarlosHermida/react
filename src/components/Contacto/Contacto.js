import { useState } from 'react'
import '../Navbar/Navbar.scss'
import './Contacto.scss'

const Contacto = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        text: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Submit', values)

    }

    return (
        <div className="container my-5 form">
            <h2 className='productosTitle'>Formulario de contacto</h2>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleInputChange} value={values.name} name="name" title='Nombre' type="text" className="form-control my-2" placeholder="*Nombre:" required></input>
                    <input onChange={handleInputChange} value={values.email} name="email" title='Email' type="email" className="form-control my-2" placeholder="*Email:" required></input>
                    <input onChange={handleInputChange} value={values.phone} name="phone" title='Celular' type="number" className="form-control my-2" placeholder="*Celular" required></input>
                    <input onChange={handleInputChange} value={values.text} name="text" title='Escribe tu Mensaje' type="text" className="form-control my-2" placeholder="*Mensaje:" required></input>
                <small><i><b>*campo requerido</b></i></small>
                <br />
                    <button className='send btn btn-outline-success' title='Enviar Formulario'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contacto 