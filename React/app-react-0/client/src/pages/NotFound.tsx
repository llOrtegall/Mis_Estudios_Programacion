import { Link, useRouteError } from 'react-router-dom'

function NotFound () {
  const error = useRouteError()

  const errorMessage = typeof error === 'object' && error !== null
    ? (error as { statusText?: string; message?: string }).statusText || (error as { message?: string }).message
    : 'An unknown error occurred'

  return (
    <section>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
      <div>
        <Link to="/">Go back to the home page</Link>
      </div>
    </section>
  )
}

export default NotFound
