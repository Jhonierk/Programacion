"""
Realizar un programa que permita cargar dos listas de 15 valores cada una. Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor (mensajes "Lista 1 mayor", "Lista 2 mayor", "Listas iguales")
Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.
"""

x=1
suma1=0
suma2=0
cant = int(input("Por favor digite el tamaño de las listas: "))
print("primer lista")


while x<=cant:
    valor=int(input("Ingrese valor en " + str(x) + " :"))
    suma1=suma1+valor
    x=x+1


print("Segunda lista")
x = 1
while x<=cant:
    valor=int(input("Ingrese valor en " + str(x) + " :"))
    suma2=suma2+valor
    x=x+1

if suma1>suma2:
    print("Lista 1 mayor.")
else:
    if suma2>suma1:
        print("Lista2 mayor.")
    else:
        print("Listas iguales.")