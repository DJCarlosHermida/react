const Bomba = ( {show, counter} ) => {
    return (
        <div>
            {show && <p style={{fontSize: `${counter * 16}px`}}>
                {counter > 9 ? '💥' : '💣'}
                </p>
                }
        </div>
    )
}

export default Bomba