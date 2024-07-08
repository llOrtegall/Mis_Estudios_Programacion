import { faker } from '@faker-js/faker'

const generatedProducts = []

export const getProductos = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10

  if (limit > 100) {
    return res.status(400).json({ error: 'Limit should be less than 100' })
  }

  try {
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
}

export const filterProducts = (req, res) => {
  const { id } = req.query
  try {
    const filteredProducts = generatedProducts.filter(product => product.id === id)
    return res.json(filteredProducts)
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const getProduct = (req, res) => {
  try {
    const { id } = req.params
    const product = generatedProducts.find(product => product.id === parseInt(id))
    return res.json(product)
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
