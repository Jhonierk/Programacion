"""
Un postulante a un empleo, realiza un test de capacitación, se obtuvo la siguiente información: cantidad total de preguntas que se le realizaron y la cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que ingrese los dos datos por teclado e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
"""

totalpreguntas=int(input("Ingrese la cantidad total de preguntas del examen:"))
totalcorrectas=int(input("Ingrese la cantidad total de preguntas contestadas correctamente:"))
porcentaje=totalcorrectas * 100 / totalpreguntas
if porcentaje>=90:
    print("Nivel máximo")
else:
    if porcentaje>=75:
        print("Nivel medio")
    else:
        if porcentaje>=50:
            print("Nivel regular")
        else:
            print("Fuera de nivel")