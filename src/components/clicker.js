import { useState } from "react"

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
    return (
        <div className="container my-5">
            <h2>Clicker</h2>
            <hr/>

            <button className="btn btn-outline-primary mx-3" onClick={restar}>Click</button>
            <button className="btn btn-primary mx-3" onClick={sumar}>Click</button>
            <p onClick={sumar}>{counter}</p>

            <hr/>
            <button className="btn btn-success" onClick={mostrar}>
                {show ? 'ocultar' : 'mostrar'}
            </button>
            {show && <p><img style={{width: `${counter * 16}px`}} src="https://images.emojiterra.com/google/android-10/512px/1f4a3.png" /></p>}
            
            

        </div>
    )
}

export default Clicker