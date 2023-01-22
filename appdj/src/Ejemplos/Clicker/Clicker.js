import {useState} from "react"
import Bomba from "./Bomba"

const Clicker = () => {
    const [counter, setCounter] = useState(0)
    const [show, setShow] = useState(true)


    const sumar = () => {
        setCounter( counter + 1 )
    }
    const restar = () => {
        if (counter > 0) {
            setCounter( counter - 1 )
        }
    }

    const mostrar = () => {
        setShow( !show )
    }





    return (
        <div className="container">
            <h4>Clicker</h4>
            <button className="btn btn-outline-danger mx-3" onClick={restar}>-</button>
            <button className="btn btn-outline-success" onClick={sumar}>+</button>
            <p>{counter}</p>
            <hr/>
            <button className="btn btn-outline-success" onClick={mostrar}>
                {show ? 'Ocultar': 'Mostrar'}
            </button>

            <Bomba show={show} counter={counter} />
        </div>
    )
}
export default Clicker