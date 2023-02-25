export const Usuario2 = ({nombre, curso, edad}) => {

    return (
        <div>
            <h4>Nombre: { nombre } </h4>
            <p>Edad: {edad}</p>
            <p>Cursando: <strong> {curso} </strong></p>
            
        </div>
    )

}