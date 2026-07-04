import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import ProductListLoading from "./ProductListLoading"
import ProductCategoryNav from "../ProductCategoryNav/ProductCategoryNav"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { getCategoryBySlug, productMatchesCategory } from "../../data/productCategories"

const MIN_LOADING_MS = 550

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const activeCategory = getCategoryBySlug(categoryId)
    const invalidCategory = Boolean(categoryId && !activeCategory)

    useEffect(() => {
        let cancelled = false
        setLoading(true)
        const startedAt = Date.now()

        getDocs(collection(db, "productos"))
            .then((resp) => {
                if (cancelled) return

                const all = resp.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))

                const filtered = categoryId
                    ? all.filter((p) => productMatchesCategory(p.category, categoryId))
                    : all

                setProductos(filtered)
            })
            .catch((err) => {
                if (cancelled) return
                console.error("Error al cargar productos:", err)
                setProductos([])
            })
            .finally(() => {
                if (cancelled) return

                const elapsed = Date.now() - startedAt
                const remaining = Math.max(0, MIN_LOADING_MS - elapsed)

                setTimeout(() => {
                    if (!cancelled) setLoading(false)
                }, remaining)
            })

        return () => {
            cancelled = true
        }
    }, [categoryId])

    return (
        <section className={`productos-page container${loading ? " productos-page--loading" : ""}`}>
            <ProductCategoryNav />
            {invalidCategory ? (
                <div className="productos-page__empty">
                    <h2>Categoría no encontrada</h2>
                    <p>Elegí otra categoría en los filtros de arriba.</p>
                </div>
            ) : loading ? (
                <ProductListLoading categoryLabel={activeCategory?.label} />
            ) : (
                <ItemList productos={productos} categoryLabel={activeCategory?.label} />
            )}
        </section>
    )
}

export default ItemListContainer
