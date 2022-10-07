"""
Realizar un programa que solicite la carga por teclado de dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.
"""
nota1=int(input("Por favor ingrese nota1  :"))
nota2=int(input("Por favor ingrese nota2  :"))
nota3=int(input("Por favor ingrese nota3  :"))
promedio = (nota1+nota2+nota3)/3
if promedio>7:
    print("Has aprobado con: ")
    print(promedio)