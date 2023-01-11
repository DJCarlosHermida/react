import { useEffect, useState } from "react"
import MOCK_DATA from '../../data/MOCK_DATA.json'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
        console.log(productos);

    const datosUsuario = (bool) => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOCK_DATA)
            }, 1500)
        })
    }

     useEffect(() => {
        datosUsuario(true)
            .then((res) => {
                setProductos(res)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])


    return (
        <div className="container my-">
            <h2>Productos</h2>
            <hr />
            { productos.map((prod => (
                <div key={prod.id}>
                    <h4>{prod.name}</h4>
                    <img className="image" src={prod.img} alt={prod.name}/>
                    <p className="container">{prod.description}</p>
                    <p>Precio: <b>USD {prod.price}</b></p>
                    
                </div>
            )))}

            {/* {productos.length > 0 && 
                <div>
                    <h3>{productos[0].name}</h3>
                    <img src="{productos[0].img}"/>
                    <p>Desc: {productos[0].description}</p>
                    <p>Precio: ${productos[0].price}</p>

                </div> 

            }
                */}

        </div>
    )
}

export default ItemListContainer 