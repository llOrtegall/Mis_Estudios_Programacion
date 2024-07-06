import { faker } from '@faker-js/faker'
import express from 'express'
import 'dotenv/config'

const products = [
  {
    id: 1,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department()
  },
  {
    id: 2,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department()
  },
  {
    id: 3,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department()
  },
  {
    id: 4,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department()
  },
  {
    id: 5,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department()
  },
  {
    id: 6,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department()
  },
  {
    id: 7,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department()
  },
  {
    id: 8,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department()
  },
  {
    id: 9,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department()
  },
  {
    id: 10,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department()
  }
]

const app = express()
const PORT = process.env.PORT || 3000

app.get('/products', (req, res) => {
  return res.json(products)
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params
  const product = products.find(product => product.id === parseInt(id))
  return res.json(product)
})

app.listen(PORT, () => {
  console.log(`Server on host: http://localhost:${PORT}`)
})
