let donaciones = [5,15,22,25,30,52,5,1,0];

function minimo(i){
    for(let i in donaciones){
        i = donaciones;
    }
    return `El minimo es: ${Math.min(...i)}`
}


function maximo(i){
    for(let i in donaciones){
        i = donaciones;
    }
    return `El maximo es: ${Math.max(...i)}`
}

function promedio(min, max,donaciones){
    var sum = 0;
    var cantidad = 0;
    for (monto of donaciones){
        if (monto > min && monto < max){
            sum += monto;
            cantidad++;
        }
    }
    return sum/cantidad;
  }


let min = minimo(donaciones);
console.log(min);

let max = maximo(donaciones);
console.log(max);


console.log(promedio(min, max, donaciones)); // devuelve 0 52 14.714285714285714