import { useState } from 'react'
import { useLoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'

const LoginScreen = () => {

    const { login } = useLoginContext()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        login(values) 
    }

    return (
        <div className='login-screen'>
            <div className='login'>
                <h2>Login</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input className='form-control my-2' type={'email'} value={values.email} onChange={handleInputChange} name="email" ></input>
                    <input className='form-control my-2' type={'password'} value={values.password} onChange={handleInputChange} name="password" ></input>
                    <button className='btn btn-outline-success'>Ingresar</button>
                </form>


            </div>
        </div>
    )
}

