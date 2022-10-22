import cv2 as cv

#-----------------------------Abri camara desde python----------------------------------#
#Se pone 0 si es una camara de pc, 1 si es una camara externa como de vigilancia
capturaVideo=cv.VideoCapture(0)
if not capturaVideo.isOpened():
    print("No se encontro camara")
    exit()
#Si el valor es verdaderon entonces...
while True:
    #encuentra la camara mientras esta activada
    tipocamara,camara = capturaVideo.read()
    #muestra la visualizacion de la camara
    cv.imshow("camara on", camara)

    #Ya como es un video entonces se pone 1, y se cierra con la tecla Q
    #no se cierra ni dandole a X
    if cv.waitKey(1) == ord("q"):
        break
#------------------------------------------------------------------------------#





capturaVideo.release()
cv.destroyAllWindows()