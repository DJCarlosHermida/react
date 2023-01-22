import Button from 'react-bootstrap/Button';
import './Usuario.css'

export const Usuario = ({nombre, curso, edad}) => {

    return (
        <div className="Usuario">
            <h4>Nombre: { nombre } </h4>
            <p>Cursando: <strong> {curso} </strong></p>
            <p>Edad: {edad}</p>

            <Button variant="success">Ver Mas</Button>{' '}
        </div>
    )

}