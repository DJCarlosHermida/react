import { useContext, useEffect, useState } from "react"
import './ItemListContainer.scss'
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
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
            .finally(() => {
                setLoading(false)
            })


    }, [categoryId])

    return (
        <div className="container">
            {
                loading ? <h2>Cargando...</h2> : <ItemList productos={productos}/>
            }
            
        </div>
    )
}
export default ItemListContainer