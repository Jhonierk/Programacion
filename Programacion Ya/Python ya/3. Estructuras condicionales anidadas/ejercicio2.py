"""
Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, negativo o nulo (es decir cero)
"""
num=int(input("Ingrese un valor: "))
if(num==0):
    print("Se ingreso el cero")
else:
    if num>0:
        print("Se ingreso un valor positivo")
    else:
        print("Se ingreso un valor negativo")