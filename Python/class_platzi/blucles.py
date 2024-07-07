numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for i in numbers:
  print(i)
  
for i in range(8):
  print(i)
  
fruits = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]

for fruit in fruits:
  if fruit == "cherry":
    print("Cherry is in the list")
    
x = 0

while x < 6:
  print(x)
  x += 1
  
for i in numbers:
  if i == 5:
    continue
  print(i)