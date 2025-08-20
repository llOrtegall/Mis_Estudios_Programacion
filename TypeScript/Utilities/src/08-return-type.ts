const createAuthResponse = (success: boolean) => {
  if(success){
    const token = crypto.randomUUID()
    return { status: 200, token } as const
  }

  return { status: 401, error: "Unauthorized" } as const
}

const response = createAuthResponse(true)

type AuthResponse = ReturnType<typeof createAuthResponse>

const authResponse: AuthResponse = {
  status: 401,
  error: "Unauthorized"
}

// Ejemplo 1: Función simple que retorna un objeto
const getUserInfo = (id: number) => {
  return {
    id,
    name: "Juan",
    email: "juan@email.com",
    isActive: true
  }
}

// Extraemos el tipo de retorno
type UserInfo = ReturnType<typeof getUserInfo>

// Ahora podemos usar este tipo en otras partes del código
const user: UserInfo = {
  id: 1,
  name: "María",
  email: "maria@email.com",
  isActive: false
}

// Ejemplo 2: Función que retorna diferentes tipos según condición
const calculateResult = (operation: "sum" | "multiply", a: number, b: number) => {
  if (operation === "sum") {
    return { operation, result: a + b, type: "addition" } as const
  }
  
  return { operation, result: a * b, type: "multiplication" } as const
}

// Extraemos el tipo de retorno
type CalculationResult = ReturnType<typeof calculateResult>

// Podemos usar este tipo para crear variables
const mathResult: CalculationResult = {
  operation: "multiply",
  result: 20,
  type: "multiplication"
}