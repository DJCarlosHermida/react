import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import "../ItemDetail/ItemDetail.scss"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        setNotFound(false)

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setItem({ ...snapshot.data(), id: snapshot.id })
                } else {
                    setItem(null)
                    setNotFound(true)
                }
            })
            .catch((err) => {
                console.error("Error al cargar producto:", err)
                setNotFound(true)
            })
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <div className="product-detail-page">
            <div className="container">
                {loading && (
                    <div className="product-detail-page__loading">
                        <h2>Cargando producto...</h2>
                    </div>
                )}

                {!loading && notFound && (
                    <div className="product-detail-page__error">
                        <h2>Producto no encontrado</h2>
                        <p>El artículo que buscás no está disponible.</p>
                        <Link to="/productos" className="product-detail__btn product-detail__btn--primary">
                            Ver productos
                        </Link>
                    </div>
                )}

                {!loading && item && <ItemDetail {...item} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer
