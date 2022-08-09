function sumar(a=null, b=null ){
    if(a === null || b === null){
        console.log("Error: debes enviar dos numeros a la funcion");
        return '';
    }
    return a + b;
}

const s = sumar(4, 5);
console.log(s);