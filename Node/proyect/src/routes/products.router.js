import { getProductos, filterProducts, getProduct } from '../controller/products.controller.js'
import { Router } from 'express'

export const productsRouter = Router()

productsRouter.get('/products', getProductos)

productsRouter.get('/products/filter', filterProducts)

productsRouter.get('/products/:id', getProduct)
