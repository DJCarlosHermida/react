import { useEffect, useState } from "react"

const ItemListContainer = () => {
        const [conuter, setCounter] = useState(1)
        const pedirDatos = (bool) => {
            return new Promise ((resolve, reject) => {
                setTimeout( () => {
                if (bool){
                    resolve('promesa resuelta')
                } else{
                    reject('rechazada')
                }
                }, 1500)
            })
        }

        const handleClick = () => {
            setCounter(conuter + 1)
        }



useEffect (() => {
    pedirDatos(true)
    .then( (res) =>{
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })    
}, [])
    
    return (
        <div className="container my-5">
            <h3>Productos</h3>
            <hr/>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
export default ItemListContainer
