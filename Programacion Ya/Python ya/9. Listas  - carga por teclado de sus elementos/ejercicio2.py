"""
Cargar por teclado y almacenar en una lista las alturas de 5 personas (valores float)
Obtener el promedio de las mismas. Contar cuántas personas son más altas que el promedio y cuántas más bajas.
"""

lista = []
cantList = int(input("Por favor digitar tamanio lista: "))
suma=0

for x in range(cantList):
    altura = float(input("Por favor digite la altura en: "+str(x)+ " : "))
    lista.append(altura)
    suma+=altura
    promedio= suma/ cantList

print("Informacion ingresada: "+str(lista))
print("Suma de las alturas: "+str(suma))
print("Promedio de la altura en: "+str(promedio))