function sendMessage(chatId: string, message: string, attachment?: File){
  //logica aquí
}

type SendMessageParams = Parameters<typeof sendMessage>

const params: SendMessageParams = [
  "123",
  "hola",
  new File([], "test.txt")
]

sendMessage(...params)

// Ejemplo 1: Función con múltiples parámetros
function createUser(name: string, age: number, isAdmin: boolean = false) {
  return { name, age, isAdmin, createdAt: new Date() }
}

type CreateUserParams = Parameters<typeof createUser>

const userParams: CreateUserParams = ["Ana", 25, true]
const newUser = createUser(...userParams)

// Acceso a parámetros específicos por índice
type UserName = CreateUserParams[0]  // string
type UserAge = CreateUserParams[1]   // number

// Ejemplo 2: Función para validar datos
function validateEmail(email: string, domain: string, strict: boolean) {
  return strict ? email.endsWith(`@${domain}`) : email.includes('@')
}

type ValidateEmailParams = Parameters<typeof validateEmail>

function logValidation(...args: ValidateEmailParams) {
  const [email, domain, strict] = args
  console.log(`Validating ${email} for ${domain}`)
  return validateEmail(...args)
}

const emailParams: ValidateEmailParams = ["test@gmail.com", "gmail.com", true]

logValidation(...emailParams)

