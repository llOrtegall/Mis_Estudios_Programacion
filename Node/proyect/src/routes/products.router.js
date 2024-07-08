import { getProductos, getProduct, createProduct, deleteProduct, updateProduct } from '../controller/products.controller.js'
import { Router } from 'express'

export const productsRouter = Router()

productsRouter.get('/products', getProductos)

productsRouter.get('/product/:id', getProduct)

productsRouter.post('/product', createProduct)

productsRouter.patch('/product/:id', updateProduct)

productsRouter.delete('/product/:id', deleteProduct)
