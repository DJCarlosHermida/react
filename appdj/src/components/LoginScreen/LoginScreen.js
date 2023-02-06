import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'

const LoginScreen = () => {
    const { login } = useContext(LoginContext)

    const [values, setvalues] = useState ({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setvalues({
            ...values,
            [e.target.name]: e.target.value
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
                    <input className='form-control my-2' value={values.email} type='email' onChange={handleInputChange} name="email" ></input>
                    <input className='form-control my-2' value={values.password} type='password' onChange={handleInputChange} name="password" ></input>
                    <button className='btn btn-outline-success'>Ingresar</button>
                </form>

            </div>
        </div>
    )
}

export default LoginScreen