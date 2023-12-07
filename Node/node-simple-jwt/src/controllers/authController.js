import { User } from '../models/User.js'
import { JWT_SECRET } from '../config.js'
import { verifyToken } from './verifyToken.js'
import jwt from 'jsonwebtoken'
import { Router } from 'express'
import bcrypt from 'bcryptjs'

export const authRouter = Router()

const SALT_GEN = await bcrypt.genSalt(10)

authRouter.post('/signin', async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please send username, email and password required fields' })
  }
  const hashedPassword = await bcrypt.hash(password, SALT_GEN)
  try {
    const result = await User.create({ username, email, password: hashedPassword })

    jwt.sign({ id: result._id }, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        return res.status(500).json({ message: 'Error creating token', err })
      }
      return res.status(201).json({ auth: true, token })
    })
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error })
  }
})

authRouter.post('/signup', async (req, res) => {
  const { email, password } = req.body
  const correo = await User.findOne({ email })
  console.log(correo)

  if (!correo) {
    return res.status(400).json({ message: 'The email' })
  }
  const passwordIsValid = await bcrypt.compare(password, correo.password)
  if (!passwordIsValid) {
    return res.status(401).json({ auth: false, token: null })
  }
  const token = jwt.sign({ id: correo._id }, JWT_SECRET, { expiresIn: '1h' })
  res.status(200).json({ auth: true, token })
})

authRouter.get('/me', verifyToken, async (req, res) => {
  const user = await User.findById(req.userId, { password: 0 })
  if (!user) {
    return res.status(404).json({ message: 'No user found' })
  }
  res.status(200).json(user)
})
