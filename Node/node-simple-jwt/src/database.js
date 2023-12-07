import mongoose from 'mongoose'

export const conectDB = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/node-simple-jwt').then(() => {
    console.log('MongoDB is connected')
  })
}
