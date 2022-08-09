//Una funcion recursiva es una funcion que se ejecuta asi misma

//La cual se ejecuta varias veces asi misma

function factorial(n){

    if(n > 1){
        console.log(n);
        n = n * factorial(n - 1);
       
    }
    return n;
}

console.log(factorial(5));