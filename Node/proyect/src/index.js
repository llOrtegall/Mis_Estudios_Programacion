import { faker } from '@faker-js/faker'
import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000

const products = []

app.get('/products', (req, res) => {
  const limit = parseInt(req.query.limit) || 10

  if (limit > 100) {
    return res.status(400).json({ error: 'Limit should be less than 100' })
  }

  try {
    const generatedProducts = []
    for (let i = 0; i < limit; i++) {
      generatedProducts.push({
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url()
      })
    }
    return res.status(200).json(generatedProducts)
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.get('/products/filter', (req, res) => {
  return res.send('Filter')
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params
  const product = products.find(product => product.id === parseInt(id))
  return res.json(product)
})

app.listen(PORT, () => {
  console.log(`Server on host: http://localhost:${PORT}`)
})
