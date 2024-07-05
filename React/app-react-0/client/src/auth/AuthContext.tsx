import { createContext, ReactNode, useState } from 'react'
import { IAuthContext } from '../types/interfaces'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext<IAuthContext>({ isAuthenticated: false, login: () => {}, logout: () => {} })

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const navigate = useNavigate()

  const login = () => {
    setIsAuthenticated(true)
    navigate('/home')
  }
  const logout = (): void => {
    setIsAuthenticated(false)
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
