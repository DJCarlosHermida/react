import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirItemXId } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({}) => {

    const [item, setItem, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
       pedirItemXId( Number(itemId))
            .then((data) =>{
                setItem(data)
            })
            .catch((err) => {
                setError(err.setError)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return (
        <div className="container my-5">
            {
                loading ? <h2>Cargando...</h2> : <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer