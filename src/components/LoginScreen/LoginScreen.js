import { useContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'

const LoginScreen = () => {
    const { login, loginWithGoogle, user } = useContext(LoginContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [values, setvalues] = useState ({
        email: '',
        password: ''
    })

    useEffect(() => {
        if (user.logged) {
            const from = location.state?.from || '/'
            navigate(from, { replace: true })
        }
    }, [user.logged, navigate, location])

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
                    {user.error && <p className="text-danger">{user.error}</p>}
                    <input className='form-control my-2' value={values.email} type='email' onChange={handleInputChange} name="email" placeholder="Email"></input>
                    <input className='form-control my-2' value={values.password} type='password' onChange={handleInputChange} name="password" placeholder="Contraseña"></input>
                    <button type="submit" className='btn btn-outline-success'>Ingresar con email</button>
                </form>

                <div className="login-screen__divider my-3">
                    <span>o</span>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={loginWithGoogle}>
                    Continuar con Google
                </button>
            </div>
        </div>
    )
}

export default LoginScreen