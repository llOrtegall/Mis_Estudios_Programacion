import { IAuthContext } from '../types/interfaces'
import { AuthContext } from '../auth/AuthContext'
import { useContext } from 'react'

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
