import cv2 as cv
 
 #La funcion imread sirve para leer la ubicacion de la imagen o video "Tener cuidado con la ruta ya que es debilmente tipado"
image = cv.imread("c:/users/jhoni/onedrive/escritorio/programacion/udemy/Python/2. Python para no matematicos/1. contorno/contorno.jpg")
if image is None:
    print("Error al leer la imagen")
else:
    #La funcion imshow sirve para mostrar la imagen donde se encuentra ubicada
    print("Se encontro la imagen")
    cv.imshow("image",image)
    #la funcion waitKey() sirve para que no se cierre la imagen inmediatamente, 0 para imagenes, 1 para videos
    cv.waitKey(0)
    #Con esta funcion se cierran todas las ventanas que se han abierto para mostrar la imagen
    cv.destroyAllWindows()




"""
path = "c:/users/jhoni/onedrive/escritorio/programacion/udemy/Python/2. Python para no matematicos/1. contorno/contorno.jpg"
imagen=cv2.imread(path)
if imagen is None:
    cv2.imshow('test',imagen)
    cv2.waitKey(0)
cv2.destroyAllWindows()

"""