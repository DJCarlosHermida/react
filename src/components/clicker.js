import { useEffect, useState } from "react"
import Bomba from "./Bomba"


const Clicker = () => {
    const [counter, setCounter] = useState(0)
    const [show, setShow] = useState(true)

    const sumar = () => {
        setCounter( counter + 1)
    }
    const restar = () => {
        if ( counter > 0) {
            
            setCounter( counter - 1) 
        }
    }
    const mostrar = () => {
        setShow ( !show)
    }

    useEffect(() =>{
        console.log('DJ');
    },[])

    return (
        <div className="container my-5">
            <h2>Clicker</h2>
            <hr/>

            <button className="btn btn-outline-primary mx-3" onClick={restar}>Click</button>
            <button className="btn btn-primary mx-3" onClick={sumar}>Click</button>
            <p onClick={sumar}>{counter} </p>

            <hr/>
            <button className="btn btn-success" onClick={mostrar}>
                {show ? 'Ocultar' : 'Mostrar'}
            </button>
            
            <Bomba show={show} counter={counter} />
               
            

        </div>
    )
}

export default Clicker