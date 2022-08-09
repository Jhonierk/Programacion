//Itera los numeros del 1 al 10
for (let i = 0; i<10; i++){
    console.log(i);
}



let arreglo = [3,4,5,6,7];
let suma = 0;
//Con el .lengt se ajusta al tamaño del arreglo
for(let i = 0; i<arreglo.length; i++){
    suma = suma + arreglo[i];
}
console.log(suma);



//Otra dorma mas sencilla de iterar con for
let arreglo2 = [3,4,5,6,7,8];
let suma2 = 0;
//Con el .lengt se ajusta al tamaño del arreglo
for(let i in arreglo2){
    suma2 = suma2 + arreglo2[i];
}
console.log(suma2);


//Otra forma
let arreglo3 = [3,4,5,6,7,8];
let suma3 = 0;
//Con el .lengt se ajusta al tamaño del arreglo
for(let elemeto of arreglo3){
    suma3 = suma3 + elemeto;
}
console.log(suma2);