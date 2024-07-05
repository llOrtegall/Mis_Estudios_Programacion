import { useNavigate } from 'react-router-dom'

function LoginPage () {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/home')
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin} className='bg-blue-200 p-2 rounded-md'>Ingresar</button>
    </div>
  )
}

export default LoginPage
