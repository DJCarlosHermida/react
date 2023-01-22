
export const MiComponente = ( { title, text, tel = 91332854 } ) => {
    return (
        <div>
            <h2>{ title }</h2>
            <p>{ text }</p>
            <small>{ tel }</small>
            <hr />
        </div>
    )
} 