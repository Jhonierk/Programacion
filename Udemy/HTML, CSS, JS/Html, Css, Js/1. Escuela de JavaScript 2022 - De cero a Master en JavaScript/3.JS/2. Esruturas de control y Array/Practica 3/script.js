/*
Practica 03: Guardar resultados de pares e impares

Crea 3 arrays y una array que tendrá números de 1 a 9. El primera array se llamará pares y el segundo impar, ambos estarán vacíos. 
Después multiplica cada uno de los números de array con números por un número aleatorio entre 1 y 100, si
 el resultado es par guarda ese número en el arrya de pares y si es impar en el array  de impares. Muestra por consola: 
 s-la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 y el array de pares e impares
*/

let pares = [];
let impares = [];

let numeros = [1,2,3,4,5,6,7,8,9];
let nRamdon = 0;

for(let n of numeros){
    nRamdon = parseInt(Math.random()*100);
    let resultado = n * nRamdon;

    if(resultado % 2 === 0){
        console.log(`${n} x ${nRamdon} = ${resultado}`);
        //Aqui se llama el array y se le llena con el resultado
        pares.push(resultado);
    }else{
        console.log(`${n} x ${nRamdon} = ${resultado}`);
        impares.push(resultado);
    }
}
console.log('Array de pares: ',pares);
console.log('Array de impares: ',impares);