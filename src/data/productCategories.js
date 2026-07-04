/** Categorías: slug en URL, etiqueta visible y valores de `category` en MOCK_DATA / Firestore. */
export const PRODUCT_CATEGORIES = [
    {
        slug: 'iluminacion',
        label: 'Iluminación',
        dbValue: 'LED',
        matchValues: ['LED', 'led', 'iluminacion', 'Iluminación'],
    },
    {
        slug: 'parlantes',
        label: 'Audio',
        dbValue: 'Parlantes',
        matchValues: ['Parlantes', 'parlantes', 'Audio', 'audio'],
    },
    {
        slug: 'monitores',
        label: 'Monitores',
        dbValue: 'Monitores',
        matchValues: ['Monitores', 'monitores', 'Monitor', 'monitor'],
    },
    {
        slug: 'microfonos',
        label: 'Micrófonos',
        dbValue: 'Microfonos',
        matchValues: ['Microfonos', 'microfonos', 'Micrófonos'],
    },
    {
        slug: 'dj',
        label: 'DJ',
        dbValue: 'DJ',
        matchValues: ['DJ', 'dj', 'Dj'],
    },
    {
        slug: 'interfaz',
        label: 'Interfaz',
        dbValue: 'Interfaz',
        matchValues: ['Interfaz', 'interfaz'],
    },
]

export function getCategoryBySlug(slug) {
    if (!slug) return null
    return PRODUCT_CATEGORIES.find((c) => c.slug === slug) ?? null
}

/** Obtiene la categoría configurada a partir del valor `category` del producto. */
export function getCategoryByDbValue(dbValue) {
    if (!dbValue) return null
    const value = String(dbValue).trim().toLowerCase()
    return (
        PRODUCT_CATEGORIES.find(
            (c) =>
                c.dbValue.toLowerCase() === value ||
                c.matchValues.some((m) => m.toLowerCase() === value)
        ) ?? null
    )
}

/** Comprueba si el valor `category` del producto pertenece a la categoría del slug. */
export function productMatchesCategory(productCategory, slug) {
    const category = getCategoryBySlug(slug)
    if (!category) return false

    const value = String(productCategory ?? '').trim().toLowerCase()
    if (!value) return false

    return category.matchValues.some((m) => m.toLowerCase() === value)
}
