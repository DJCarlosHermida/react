import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
        console.log(categoryId);

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
        <div className="container">
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer
