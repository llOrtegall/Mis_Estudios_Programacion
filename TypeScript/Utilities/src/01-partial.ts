interface User {
  id: number
  name: string
  email: string
  isAdmin: boolean
}

export function updateUser(id: number, userUpdate: Partial<User>){
  console.log(`Updating user whit id ${id}`, userUpdate);
}