import { useEffect, useState } from "react"
import MOCK_DATA from '../../data/MOCK_DATA.json'
import './ItemListContainer.scss'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    console.log(productos);

    const pedirDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOCK_DATA)
            }, 1500)
        })
    }

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="container my-5">
            <div className="">
                <h2 className="seccionTitle">Productos</h2>
                <hr/>
                <div className="card">

                { productos.map((productos =>(
                    <div className="card">
                        <h3 className="prodcutosName">{productos.name}</h3>
                        <img className="image" alt="Parlante" title={productos.name} src={productos.img}/>
                        <p className="description">{productos.description}</p>
                        <p className="price"><b>USD {productos.price}</b></p>
                    </div>

)))
}
</div>
            </div>
        </div>
    )
}
export default ItemListContainer
