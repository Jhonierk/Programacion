"""
Una empresa tiene dos turnos (mañana y tarde) en los que trabajan 8 empleados (4 por la mañana y 4 por la tarde) 
Confeccionar un programa que permita almacenar los sueldos de los empleados agrupados en dos listas.
Imprimir las dos listas de sueldos.
"""

listaN = []
listaD = []

sueldoN=0
sueldoD=0

sumaN=0
sumaD=0

cantN = int(input("Cantidad de empleados tabrabajando nocturno: "))
cantD = int(input("Cantidad de empleados trabajando Diurno: "))

for x in range(cantN):
    sueldoN = int(input("Sueldo del empleado: "+str(x+1)+" turno nocturno "))
    listaN.append(sueldoN)
    sumaN+=sueldoN

for x in range(cantD):
    sueldoD = int(input("Sueldo del empleado: "+str(x+1)+" turno dirurno "))
    listaD.append(sueldoD)
    sumaD+=sueldoD

print("Cantidad de empleados nocturnos: "+str(cantN))
print("Cantidad de empleados diurnos: "+str(cantD))

print("informacion de la lista de sueldo Nocturno: "+str(listaN))
print("informacion de la lista de sueldo Diurno: "+str(listaD))

print("Suma de los sueldos de los empleados nocturnos: "+str(sumaN))
print("Suma de los sueldos de los empleados nocturnos: "+str(sumaD))
