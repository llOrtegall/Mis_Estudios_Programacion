import { app } from './app.js'
import { conectDB } from './database.js'

async function init () {
  await app.listen(3000)
  console.log('Server on port http://localhost:3000')
}

init()
conectDB()
