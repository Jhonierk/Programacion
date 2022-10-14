import cv2 as cv
import numpy as np

valorSuavizar=3
valorKernel=3

#se lee la imagen:
original=cv.imread("c:/users/jhoni/onedrive/escritorio/programacion/udemy/Python/2. Python para no matematicos/2. contador de monedas/monedas.jpg")

# se transforma a escalas grises:
gris = cv.cvtColor(original, cv.COLOR_BGR2GRAY)

#para encontrar contornos mas exactos:
#desenfoque gausiano, sirve para suavisar (desenfocar) algunos pixeles dificiles de leer la imagen (Tambien se le llama quitarle el ruido a una imagen)
suavizar = cv.GaussianBlur (gris, (valorSuavizar,valorKernel), 0)

#segunda eliminacion de ruido (Encontrar los bordes)
#como parametro: 1. La primera eliminacion de ruido, 2 y 3 el rango de min a maximo de la eliminacion de ruido 
canny = cv.Canny(suavizar, 60, 100)


#para mostrar la imagen:
cv.imshow("imagen gris", gris)
cv.imshow("Imafen suavizada", suavizar)
cv.imshow("Encuentra los bordes", canny)
cv.waitKey(0)



"""
Con esto se prueba si se lee la imagen 
if original is None:
    print("Error en la ruta de imagen")
else:
    print("Todo funcional")
"""