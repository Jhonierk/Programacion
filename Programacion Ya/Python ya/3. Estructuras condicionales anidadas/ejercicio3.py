"""
Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras. Mostrar un mensaje de error si el número de cifras es mayor.
"""
num=int(input("Ingrese un valor de hasta 3 digitos: "))
if(num<10):
    print("Tiene un digito")
else:
    if num<100:
        print("Tiene dos digitos")
    else:
        if num<1000:
            print("Tiene tres digitos")
        else:
            print("Error")
