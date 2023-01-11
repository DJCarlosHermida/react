import './Usuario.scss'
import { Button } from 'react-bootstrap'

export const Usuario = ( {nombre, curso, edad} ) => {

    return (
        <div className="usuario">
            <h2>Nombre: {nombre}</h2>
            <p>Cursando: <strong>{curso}</strong></p>
            <p>Edad: {edad}</p>

            {/* <button className='btn btn-primary'>Click me!</button> */}
            <Button variant="success" className="otra-clase">Click me!</Button>
        </div>
    )
}