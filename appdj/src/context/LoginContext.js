import { createContext, useState } from "react"

const MOCK_USERS = [
    {
        email: 'dj@yo.com',
        password: '1234'
    }
]

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: '',
        logged: false,
        error: null
    })

    console.log(user);

    const login = (values) => {
        const match = MOCK_USERS.find(user => user.email === values.email && user.password === values.password)

        if (match) {
            setUser({
                email: match.email,
                logged: true,
                error: null
            })
        } else {
            setUser({
                email: null,
                logged: false,
                error: 'Datos Incorrectos'
            })
        }
    }

    const logout = () =>{
        setUser({
            email: '',
            logged: false,
            error: null
        })
    }


    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}