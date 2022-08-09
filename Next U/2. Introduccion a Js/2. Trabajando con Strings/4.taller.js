function comida(fila){
    let arr = fila.split('-');
    let obj1 = arr[0];
    let obj2 = arr[1];
    let obj3 = arr[2];
    let obj4 = arr[3];
    let obj5 = arr[4];

    return obj1 + obj2 + obj3 + obj4 + obj5;
}

let plato = "Pasta al Pesto";
let fila = "pasta, - queso, - pesto, - aceite oliva, - especies variadas";

console.log("Mi bolsa de comida: "+plato);
console.log("Ingredientes: "+ comida(fila));