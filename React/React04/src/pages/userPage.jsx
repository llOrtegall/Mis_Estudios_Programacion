import { useParams } from "react-router-dom";

export function UserPage() {

  const { userId } = useParams()

  return (
    <div>
      User <h1>{userId}</h1>
    </div>
  )
}