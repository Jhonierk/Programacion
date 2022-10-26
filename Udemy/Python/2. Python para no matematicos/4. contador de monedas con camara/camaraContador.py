import cv2 as cv
import numpy as np

#funcion para ordenar y encontrar los puntos x & y 
def ordenarPuntos(puntos):
    #con la funcion concatenate es unir y elazar matrices
    n_puntos=np.concatenate(puntos[0], puntos[1], puntos[2], puntos[3]).toList()
    #con la funcion sorted ordena los puntos y con key asume el tipo de orden que se le asigne
    #y cono esto se define mi cordenada y
    y_order=sorted(n_puntos, key=lambda n_puntos:n_puntos[1])
    #coordenada x1: punto1
    x1_order=y_order[:2]
    x1_order=sorted(x1_order, key=lambda x1_order:x1_order[0])

    #punto2
    x2_order=y_order[2:4]
    x2_order=sorted(x2_order, key=lambda x2_order:x2_order[0])

    return [x1_order[0], x1_order[1], x2_order[0], x2_order[1]]

def alineamiento(image, ancho, alto):

    imagen_alineada=None
    grises=cv.cvtColor(image, cv.COLOR_BGR2GRAY)
    tipoumbral,umbral=cv.threshold(grises, 150, 255, cv.THRESH_BINARY)
    cv.imshow("Umbral", umbral)
    #Al encontrar el contorno se centre en la posicion indicada
    contorno,jerarquia=cv.findContours(umbral, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)[0]
    #Re organizando 
    contorno=sorted(contorno, key=cv.contourArea,reverse=True)[:1]

    for c in contorno:
        #funcion arcLength ayuda sacar el area de diferentes objetos
        epsilon=0.01*cv.arcLength(c, True)
        #aproximacion para analizar las curvas pára que no haya tanto ruido
        aprox=cv.approxPolyDP(c, epsilon, True)
        #Si la la variable aprox fuese igual al valor a 4, de los 4 puntos que tenemos,
        if len(aprox) == 4:
            #ordena los puntos
            puntos=ordenarPuntos(aprox)

            #convertir los datos de alto y ancho:
            #convierte todos los valores de puntos ordenados a enteros normales
            puntos1=np.float32(puntos)

            #definiendo los puntos de las coordenadas
            #para definir el tipo de hoja si es, A4, A6, Oficio, carta, etc
            puntos2=np.float32([[0,0],[ancho,0],[alto,0],[ancho,alto]])

            #Metodo de perspectiva (fija el recuadro de la camara)
            M =  cv.getPerspectiveTransform(puntos1,puntos2)
            imagen_alineada = cv.warpPerspective(image, M, (ancho,alto))
            