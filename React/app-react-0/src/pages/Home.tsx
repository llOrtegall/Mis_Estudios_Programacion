import { useEffect, useState } from 'react'
import { ProductsArray } from '../types/products'

const Home = (): JSX.Element => {
  const [data, setData] = useState<ProductsArray>([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <main className='p-2'>
      <article className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4'>
        {data.map((product) => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.images[0]} alt={product.title} loading='lazy' width={100} />
          </div>
        ))}
      </article>
    </main>
  )
}

export default Home