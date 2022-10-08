"""
Confeccionar un programa que lea n pares de datos, cada par de datos corresponde a la 
medida de la base y la altura de un triángulo. El programa deberá informar:
a) De cada triángulo la medida de su base, su altura y su superficie.
b) La cantidad de triángulos cuya superficie es mayor a 12.
"""

n=int(input("Cuantos triángulos procesará:"))
cantidad=0
for x in range(n):
    basetri=int(input("Ingrese el valor de la base:"))
    altura=int(input("Ingrese el valor de la altura:"))
    superficie=basetri*altura/2
    print("La superficie es")
    print(superficie)
    if superficie>12:
        cantidad=cantidad+1
print("La cantidad de triángulos con superficie superior a 12 son")
print(cantidad)