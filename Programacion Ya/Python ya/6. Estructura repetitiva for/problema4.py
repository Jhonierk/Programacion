"""
Desarrollar un programa que permita la carga de 10 valores por teclado y 
nos muestre posteriormente la suma de los valores ingresados y su promedio. 
Este problema ya lo desarrollamos, lo resolveremos empleando la estructura 
for para repetir la carga de los diez valores por teclado.
"""

suma=0
rango = 10

for x in range(rango):
    valor=int(input("Ingrese valor en "+str(x)+ " : "))
    suma+=valor

print("La suma de los valores valores es: ", suma)
promedio = suma/rango
print("El promedio de la suma es: ", promedio)