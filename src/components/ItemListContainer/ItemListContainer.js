import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MOCK_DATA from '../../data/MOCK_DATA.json'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const parametros = useParams()
    console.log(parametros);

    const datosUsuario = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOCK_DATA)
            }, 1500)
        })
    }

     useEffect(() => {
        datosUsuario()
            .then((res) => {
                setProductos(res)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])


    return (
        <div className="Card">
            <h2>Productos</h2>
            <hr />
            { productos.map((prod => (
                <div className="container" key={prod.id}>
                    <h4>{prod.name}</h4>
                    <img className="image" src={prod.img} alt={prod.name}/>
                    <p className="container desc">{prod.description}</p>
                    <p className="precio">Precio: <b>USD {prod.price}</b></p>
                    <button className="btn btn-outline-primary">Ver Más</button>
                    
                </div>
            )))}

          
        </div>
    )
}

export default ItemListContainer 