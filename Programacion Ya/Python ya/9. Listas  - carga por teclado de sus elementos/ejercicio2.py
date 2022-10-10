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

altas=0
bajas=0
 
for x in range (cantList):
    if lista[x]>promedio:
        altas+=1
    if lista[x]<promedio:
        bajas+=1

print("Cantidad de personas altas al promedio: "+str(altas))
print("Cantidad de personas bajas al promedio: "+str(bajas))