const ItemListContainer = () => {
    const pedirDatos = (bool) => {
        return new Promise (( resolve, reject) => {
            if (bool){
            setTimeout(() => {
                resolve('promesa resuelta')
                reject('rechazada')
            }, 1500)
        }
        })
    }
pedirDatos(true)
    .then( (res) =>{
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    
    return (
        <div className="container my-5">
            <h3>Productos</h3>
            <hr/>
        </div>
    )
}
export default ItemListContainer
