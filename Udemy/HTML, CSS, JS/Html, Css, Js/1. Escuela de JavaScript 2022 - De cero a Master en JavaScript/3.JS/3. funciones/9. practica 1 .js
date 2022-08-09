/*
Practica 01: Palíndromo

    Crear un sistema que detecte si una palabra es palíndroma o no

    Para solucionar este problema el usuario tiene que ingresar por pantalla una palabra y el sistema verificas si es palíndromo o no.

    Una palabra palíndroma se lee de igual formo como de la derecha y de la izquierda.



*/

let texto = "luzazul";
let cant = 0;
for(let x = 0; x < texto.length; x++){
    if(texto.charAt(x) == texto.charAt(texto.length - 1 - x)){
        cant++;
    }
} (cant == texto.length) ? console.log(texto + ' Se lee igual en ambas direcciones') : console.log(texto+ ' No es suna palabra palindroma');
/*
if(cant == texto.length){
    console.log(texto + ' Se lee igual en ambas direcciones');
} else{
    console.log(texto+ ' No es suna palabra palindroma');
}
*/


