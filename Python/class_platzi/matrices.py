matrices = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrices)

print(matrices[2][1])

tuple = (1, 2, 3, 4, 5)
print(tuple)

numbers = { 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5 }

information = {
    'name': 'Juan',
    'age': 25,
    'hobbies': ['leer', 'bailar', 'cantar'],
    'numbers': numbers
}

claves = information.keys()
print(claves)

values = information.values()
print(values)

pares = information.items()
print(pares)

contacts = {
  "Carla": {'name': 'Juan', 'phone': 123456}, 
  "Andres": {'name': 'Maria', 'phone': 654321}, 
  "Daniel": {'name': 'Pedro', 'phone': 987654}, 
  "Sebas": {'name': 'Ana', 'phone': 456789}
  }

print(contacts)
print(contacts['Carla'])