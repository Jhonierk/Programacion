
#esto es una lista en python
from os import popen


carros=['rojo','dorado','amarillo','escarlata','cafe','negro','azul','blanco','cafe']

print(carros)

#imprime la lista desde inicio 1 y fin 3 
print(carros[1:3])

#con appen se agrega un dato dentro de la lista
carros.append('verde')
print(carros)

#borra el dato de la lista en la posicion indicada
del carros[4]
print(carros)

#len()
#con len te muestra la cantidad de posicione usadas en una lista
print(len(carros))

#max
#con max muestra el valor maximo de una lista
velocidad = [100,200,500,20,30,40]
print(max(velocidad))

#min 
#muestra el valor minimo de una listas
print(min(velocidad))

#sorted()
#con sorted organiza los valores de menor a mayor
#incluso alfabeticamente
print(sorted(velocidad))
print(sorted(carros))

#sum
#suma todos los elementos de la lista
print(sum(velocidad))

#pop
#con pop elimina el ultimo elemento de la lista
print(velocidad)
velocidad.pop()
print(velocidad)