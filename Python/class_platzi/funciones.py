# Funciones para crearlas se usa la palabra reservada def y el nombre de la función seguido de paréntesis y dos puntos (:)

def greet(name, lastName):
  print("Hello" + " " + name + " " + lastName)
  print("Good Morning")
  
greet('John', 'Doe')

def add(a, b):
  return a + b

def substract(a, b):
  return a - b

def multiply(a, b):
  return a * b

def divide(a, b):
  return a / b

result = add(5, 10)
result2 = substract(10, 5)
result3 = multiply(5, 5)
result4 = divide(10, 2)

def calculator():
  while True:
    print("Options:")
    print("1. Add")
    print("2. Substract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Exit")
    
    option = int(input("Enter option: "))
    
    if option == 5:
      break
    
    if option in [1, 2, 3, 4]:
      num1 = float(input("Enter first number: "))
      num2 = float(input("Enter second number: "))
      
      if option == 1:
        print("-------------------------")
        print("El resultado es = ", add(num1, num2))
        print("-------------------------")
      elif option == 2:
        print("-------------------------")
        print("El resultado es = ", substract(num1, num2))
        print("-------------------------")
      elif option == 3:
        print("-------------------------")
        print("El resultado es = ", multiply(num1, num2))
        print("-------------------------")
      elif option == 4:
        print("-------------------------")
        print("El resultado es = ", divide(num1, num2))
        print("-------------------------")
    else:
      print("Invalid Option")
      
calculator()  