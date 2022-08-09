/*
    Define cinco variables tipo string, cada una de las cuales contendrá el nombre de una de tus canciones preferidas. X
    Define una función que recibe como parámetro el nombre de la canción y que imprima dicha canción cada vez que la invoques. 
    Imprime un título que diga “Mi lista de canciones preferidas”.
    Invoca a la función definida en (b) para cada una de las canciones.
*/

var can1 
var can2 
var can3 
var can4
var can5

function musica(can1, can2, can3, can4, can5){
    return can1 + can2 + can3 + can4 + can5;
}

var lista = musica("Rock", "Electronica", "Rap", "Pop", "Lopfif");
console.log(lista);
