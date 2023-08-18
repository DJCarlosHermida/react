import MOCK_DATA from '../data/MOCK_DATA.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 550)
    })
}

export const pedirItemXId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const item = MOCK_DATA.find((el) => el.id === id)

            if (item) {
                resolve(item)
            }else {
                reject({
                    error: 'Producto No Disponible'
                })
            }

        },2000)
    })
}