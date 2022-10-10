"""
Definir una lista por asignación con 5 enteros. Mostrar por pantalla solo los elementos con valor iguales o superiores a 7
"""

lista = [3,6,8,9,10]

cant = 0

for x in range (len(lista)):
    if lista[x] >= 7:
        cant+=1

print("Cantidad de numeros mayor o igual a 7 de la lista: "+ str(cant)) 