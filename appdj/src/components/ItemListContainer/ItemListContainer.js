import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                if (categoryId) {
                    setProductos( res.filter(prod => prod.category === categoryId) )
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryId])

    return (
        <div className="container">
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer
