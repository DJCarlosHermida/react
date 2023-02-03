import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirItemXId } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({}) => {

    const [item, setItem,] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
       pedirItemXId( Number(itemId))
            .then((data) =>{
                setItem(data)
            })
            .catch((err) => {
                setError(err.error)
            })
    }, [itemId])

    return (
        <div className="container my-5">
            {
                item && <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer