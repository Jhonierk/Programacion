"""
* Escriba líneas de código de Python para obtener la suma de todos los números en una lista 
* luego obtenga el resultado de multiplicarlos luego obtenga el mayor número de ellos 
* luego obtenga el menor número de ellos 
* finalmente obtenga el número de elementos en esa lista.
"""

#lista
my_list =[1,4,20,50,100,2000,10000,6]

#suma de la lista
sum(my_list)

#funcion para multiplicar 
def multiplyList(myList):
    result = 1
    for item in myList:
        result = result * item
    return result
print(multiplyList(my_list))


max(my_list)
min(my_list)
len(my_list)