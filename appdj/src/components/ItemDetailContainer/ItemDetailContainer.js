import { useEffect, useState } from "react"
import { pedirDatos, pedirItemXId } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = ({itemId}) => {

    const [item, setItem,] = useState(null)
    const [error, setError] = useState(null)
    console.log(item)

    useEffect(() => {
        setError(null)


       pedirItemXId(itemId)
            .then((data) =>{
                setItem(data)
            })
            .catch((err) => {
                setError(err.error)
            })
    }, [itemId])

    return (
        <div className="container my-5 error">
            {
                error ? error : item && <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer