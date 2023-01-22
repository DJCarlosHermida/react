import './MyButton.scss'

const MyButton = ( {children, variant = 1, className}) => {

    return (
        <button className={`mybutton variant-${variant} ${className}`}>
            {children}
        </button>
    )
}

export default MyButton