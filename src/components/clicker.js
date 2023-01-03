const Clicker = () => {
    let counter = 0

    const sumar = () => {
        counter++
        console.log(counter);
    }
    return (
        <div className="container my-5">
            <h2>Clicker</h2>
            <hr/>

            <button className="btn btn-danger" onClick={sumar}>Click</button>
            <p onClick={sumar}>{counter}</p>
        </div>
    )
}

export default Clicker