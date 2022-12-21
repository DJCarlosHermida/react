export const OpcionesDisco = (props) => {
    console.log( props  );
    return (
        <div>
            <hr/>
            <ul>
            <h4>{ props.titulo}</h4>
            <ol>Básico</ol>
            <ol>Standar</ol>
            <ol>Full</ol>
            <ol>Full HD</ol>
            <button type="button" className="btn btn-primary">Consultar</button>
        </ul>
            <hr/>

        </div>
    )
}