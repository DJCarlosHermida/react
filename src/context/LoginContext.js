import { createContext, useState, useEffect } from "react"
import { DEMO_CREDENTIALS } from "../data/demoCredentials"
import { getDisplayNameFromEmail } from "../firebase/config"

const STORAGE_KEY = "djteam-demo-user"

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    displayName: "",
    uid: null,
    logged: false,
    error: null,
  })

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return
    try {
      const { email, displayName } = JSON.parse(stored)
      setUser({ email, displayName, uid: "demo", logged: true, error: null })
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  const login = (values) => {
    const email = values.email?.trim()
    const password = values.password

    if (
      email === DEMO_CREDENTIALS.email &&
      password === DEMO_CREDENTIALS.password
    ) {
      const displayName = getDisplayNameFromEmail(email)
      setUser({
        email,
        displayName,
        uid: "demo",
        logged: true,
        error: null,
      })
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, displayName }))
      return
    }

    setUser((prev) => ({
      ...prev,
      logged: false,
      error: "Credenciales incorrectas. Usá el correo y la contraseña de demostración.",
    }))
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser({
      email: "",
      displayName: "",
      uid: null,
      logged: false,
      error: null,
    })
  }

  return (
    <LoginContext.Provider value={{ user, login, logout, demoCredentials: DEMO_CREDENTIALS }}>
      {children}
    </LoginContext.Provider>
  )
}
