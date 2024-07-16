import { User } from "./model/User.model";

const test = async () => {
  try {
    await User.sync()
    const user = await User.create({
      document: 123456789,
      name: 'John Doe',
      email: 'exaple@gmail.com',
      password: '412415415'
    })
    console.log(user.toJSON())
  } catch (error) {
    console.log(error)
  }
}

test()