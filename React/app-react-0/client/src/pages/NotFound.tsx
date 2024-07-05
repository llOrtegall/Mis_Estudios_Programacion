import { useRouteError } from 'react-router-dom'

function NotFound () {
  const error = useRouteError()

  // Log the error for debugging purposes
  console.error(error)

  // Type assertion: Assuming error is an object with optional properties `statusText` and `message`
  const errorMessage = typeof error === 'object' && error !== null
    ? (error as { statusText?: string; message?: string }).statusText || (error as { message?: string }).message
    : 'An unknown error occurred'

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  )
}

export default NotFound
