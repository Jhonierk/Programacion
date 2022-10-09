"""
Ingresar una oración que pueden tener letras tanto en mayúsculas como minúsculas. 
Contar la cantidad de vocales.
Crear un segundo string con toda la oración en minúsculas para que sea más fácil disponer la condición que verifica que es una vocal.
"""

palabra = input("Por favor ingrese las palabras: ")

cant=0

for x in range (len(palabra)):
    
    palabra = palabra.lower()
    if palabra[x] =="a" or palabra[x]=="e" or palabra[x]=="i" or palabra[x]=="o" or palabra[x]=="u":
        cant+=1

print("Cantidad de vocales en la oracion: "+str(cant))

"""
en while

oracion=input("Ingrese una oracion:")
oracionmin=oracion.lower()
cantidad=0
x=0
while x<len(oracionmin):
    if oracionmin[x]=="a" or oracionmin[x]=="e" or oracionmin[x]=="i" or oracionmin[x]=="o" or oracionmin[x]=="u":
        cantidad=cantidad+1
    x=x+1
print("La cantidad de vocales de la oracion son")
print(cantidad)
"""