import express from 'express'
import { authRouter } from './controllers/authController.js'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(authRouter)
