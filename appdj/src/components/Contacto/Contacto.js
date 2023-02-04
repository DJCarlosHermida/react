import { useState } from 'react'
import '../Navbar/Navbar.scss'
import './Contacto.scss'

const Contacto = () => {
    const [nombre, setNombre] = useState()

    const handleNombre = (e) => {
        console.log(e.target.value)
        setNombre(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('submit', {
            nombre: nombre, 
            email: '',
            phone: '',
        })
    }

    return (
        <div className="container my-5 form">
            <h2 className='productosTitle'>Formulario de contacto</h2>

            <form onSubmit={handleSubmit}>
                <input onChange={handleNombre} value={nombre} type="text" className="form-control my-2"  placeholder="Nombre"></input>
                <input type="email" className="form-control my-2" placeholder="Email" ></input>
                <input type="phone" className="form-control my-2" placeholder="Cel" ></input>
                <hr />
                <button className='btn btn-outline-success'>Enviar</button>
            </form>


        </div>

    )
}

export default Contacto 