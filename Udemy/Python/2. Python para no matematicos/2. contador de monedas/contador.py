import cv2 as cv
#numpy sirve para trabajar con matrices
import numpy as np

valorSuavizar=3
valorKernel=3

#se lee la imagen:
original=cv.imread("c:/users/jhoni/onedrive/escritorio/programacion/udemy/Python/2. Python para no matematicos/2. contador de monedas/monedaCPL.jpg")

# se transforma a escalas grises:
gris = cv.cvtColor(original, cv.COLOR_BGR2GRAY)

#para encontrar contornos mas exactos:
#desenfoque gausiano, sirve para suavisar (desenfocar) algunos pixeles dificiles de leer la imagen (Tambien se le llama quitarle el ruido a una imagen)
suavizar = cv.GaussianBlur (gris, (valorSuavizar,valorKernel), 0)

#segunda eliminacion de ruido (Encontrar los bordes)
#como parametro: 1. La primera eliminacion de ruido, 2 y 3 el rango de min a maximo de la eliminacion de ruido 
canny = cv.Canny(suavizar, 60, 100)

#Aqui se trabaja con matrices 3x3 con las variables suavizar y kernel, y se le pono que trabaja con enteros de 8 bits (np.uint8)
kernel=np.ones((valorSuavizar,valorKernel),np.uint8)

#Para encontrar el contorno exterior, el contorno de afuera y el interno lo descarta:
#aplicar la morfologia de cierre 
cierre=cv.morphologyEx(canny, cv.MORPH_CLOSE, kernel)

#Encontrar el contorno de la monedas
contornos, jerarquia = cv.findContours(cierre.copy(), cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)

#Sirve para contar cuantas monedas encuentra:
#Los contornos encontrados son la equivalencia de monedas encontradas
print("monedas encontradas: {}".format(len(contornos)))

#Dibujar contorno: 
cv.drawContours(original, contornos, -1, (0,0,255),2)

#para mostrar la imagen:

#Se pasa a escalas grises:
cv.imshow("1.imagen gris", gris)
#Se suaviza para eliminar el ruido:
cv.imshow("2.Imafen suavizada", suavizar)
#segunda eliminacion de ruido e incuentra los contornos
cv.imshow("3.Encuentra los bordes", canny)
#Encuentra el contorno exterior
cv.imshow("4.Cierre morfologico", cierre)
#Encuentra y dibuja el contorno de las monedas
cv.imshow("5.Resultado final", original)

cv.waitKey(0)



"""
Con esto se prueba si se lee la imagen 
if original is None:
    print("Error en la ruta de imagen")
else:
    print("Todo funcional")
"""