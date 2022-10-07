"""
Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar un mensaje "Promocionado".
"""
nota1=int(input("Por favor ingrese nota1  :"))
nota2=int(input("Por favor ingrese nota2  :"))
nota3=int(input("Por favor ingrese nota3  :"))
promedio = (nota1+nota2+nota3)/3
if promedio>7:
    print("Has aprobado con: ")
    print(promedio)