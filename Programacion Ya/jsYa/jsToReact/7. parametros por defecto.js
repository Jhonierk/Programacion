function suma(a, b){
    if(a === undefined || b === undefined){
        console.log('Debes introducir 2 valores');
        return;
    } 
    return a + b;
}

suma(3);

// aplicando los parametros por defecto 
function sumar(a =0, b=0){
    return a + b;
}

console.log(sumar(3));