import { Link } from 'react-router-dom'

function LoginPage () {
  return (
    <div>
      <h1>Login</h1>
      <Link to={'/home'}>Ir a Home</Link>
    </div>
  )
}

export default LoginPage
