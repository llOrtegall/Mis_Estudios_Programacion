import { productsRouter } from './routes/products.router.js'
import { errorHandler, logErrors } from './middleware/error.handler.js'
import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 6000

app.use(express.json())

app.use('/api/v1', productsRouter)

app.use(logErrors)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server on host: http://localhost:${PORT}`)
})
