

const Select = ({options}) => {

    return (

        <select>
            {options.map( (opt) => <option value={opt.value}>{opt.text}</option> )}
        </select>

    )
}