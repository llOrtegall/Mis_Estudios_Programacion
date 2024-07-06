to_do = ['dirigirnos al hotel', 'ir a almorzar', 'ir a la playa', 'ir a cenar', 'ir a dormir']

print(to_do)

numbers = [1, 2, 3, 4, "cinco", 6, 7, 8, 9, 10]

print(numbers)

mixed_list = [1, 2, 3, 4, "cinco", 6, 7, 8, 9, 10, [11, 12, 13, 14, 15], {'name': 'Juan', 'age': 25}]

print(mixed_list)
print(len(mixed_list))
print('primer elemento de la lista:', mixed_list[0])
print('último elemento de la lista:', mixed_list[-1])

string = 'Hola, soy un string'
print(mixed_list[2:5])

mixed_list.append(False)
print(mixed_list)

del mixed_list[0]