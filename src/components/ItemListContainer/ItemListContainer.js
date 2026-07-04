import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import ProductCategoryNav from "../ProductCategoryNav/ProductCategoryNav"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { getCategoryBySlug, productMatchesCategory } from "../../data/productCategories"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const activeCategory = getCategoryBySlug(categoryId)
    const invalidCategory = Boolean(categoryId && !activeCategory)

    useEffect(() => {
        setLoading(true)

        getDocs(collection(db, "productos"))
            .then((resp) => {
                const all = resp.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }))

                const filtered = categoryId
                    ? all.filter((p) => productMatchesCategory(p.category, categoryId))
                    : all

                setProductos(filtered)
            })
            .catch((err) => {
                console.error("Error al cargar productos:", err)
                setProductos([])
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (
        <div className="productos-page container">
            <ProductCategoryNav />
            {
                invalidCategory ? (
                    <div className="productos-page__empty">
                        <h2>Categoría no encontrada</h2>
                        <p>Elegí otra categoría en los filtros de arriba.</p>
                    </div>
                ) : loading ? (
                    <h2 className="productos-page__loading">Cargando...</h2>
                ) : (
                    <ItemList productos={productos} categoryLabel={activeCategory?.label} />
                )
            }
        </div>
    )
}

export default ItemListContainer
