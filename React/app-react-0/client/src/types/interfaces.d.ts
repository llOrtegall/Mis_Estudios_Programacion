export interface IAuthContext {
  isAuthenticated: boolean
  login(): void
  logout(): void
}
