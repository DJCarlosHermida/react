import './Contenedor.scss'


const Contenedor = ( {children} ) => {

    return (
        <div className="contenedor">
            {children}
        </div>
    )
}

export default Contenedor