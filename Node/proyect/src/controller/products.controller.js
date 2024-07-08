import { ProductServices } from '../services/product.service.js'

const service = new ProductServices()

// TODO: por el momento se asume que los productos se generan en memoria sin persistencia en base de datos
export const getProductos = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10

  if (limit > 100) {
    return res.status(400).json({ error: 'Limit should be less than 100' })
  }

  try {
    const products = await service.getProducts(limit)
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) return res.status(400).json({ error: 'Id is required' })

    const product = await service.getProduct(id)

    if (!product) return res.status(404).json({ error: 'Product not found' })

    return res.status(200).json(product)
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const createProduct = async (req, res) => {
  // TODO: por el momento se asume que el body tiene la siguiente estructura sin validar los datos
  const { name, price, description, image } = req.body
  try {
    const newProduct = await service.createProduct({ name, price, description, image })

    if (!newProduct) return res.status(400).json({ error: 'Error creating product' })

    return res.status(201).json(newProduct)
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const { name, price, description, image } = req.body
  try {
    const updatedProduct = await service.updateProduct(id, { name, price, description, image })
    return res.status(200).json({
      message: 'Product updated successfully',
      updated: updatedProduct
    })
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await service.deleteProduct(id)
    return res.status(200).json({
      message: 'Product deleted successfully',
      deleted: product
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
