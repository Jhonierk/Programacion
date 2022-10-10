"""
Almacenar en una lista los sueldos (valores float) de 5 operarios. Imprimir la lista y el promedio de sueldos.
"""

lista=[]
cantList = 5
sumaSueldo = 0
for x in range(cantList):
    sueldos = float(input("Por favor ingrese el sueldo del empleado: "+str(x)+ " : "))
    sumaSueldo += sueldos
    promedio = sumaSueldo / cantList

print("La suma de todos los sueldos es: "+str(sumaSueldo))
print("Y el promedio del sueldo es de: "+str(promedio))