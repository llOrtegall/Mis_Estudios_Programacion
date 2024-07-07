x = 20
y = 10

if x > 5:
  print("x es mayor a 5")
elif x == 5:
  print("x es igual a 5")
else:
  print("x es menor a 5")
  
# condición and
if x > 5 and y > 5:
  print("x y y son mayores a 5")
  
# condición or
if x > 5 or y > 5:
  print("x o y son mayores a 5")
  
# condición not
if not x > 5:
  print("x no es mayor a 5")
  
is_miembro = False

if is_miembro:
  print("Es miembro")
  if x > 5:
    print("x es mayor a 5")