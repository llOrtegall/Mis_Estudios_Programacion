type UserEmail = `${string}@${string}` | null | undefined

interface User {
  name: string
  email: UserEmail
}

const users: User[] = [
  { name: "John", email: "john@example.com" },
  { name: "Jane", email: null },
  { name: "Bob", email: undefined },
]

function sendNewsLetter(email: NonNullable<UserEmail>) {
  console.log(`Sending news letter to ${email}`);
}

users.forEach(user => {
  if(user.email){
    sendNewsLetter(user.email)
  }
})