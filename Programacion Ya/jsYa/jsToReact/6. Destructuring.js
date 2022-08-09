//Normalmente seria asi:
const cuadrado = {
    x: 10,
    y: 10,
}

function calcularArea(cuadrado){
    const {x, y} = cuadrado;
    return x * y;
}

console.log(calcularArea(cuadrado));

// ahora con destructuring
const cuadrados = {
    x: 10,
    y: 10,
}
//Aqui se aplica el destructuring
function calcularArea({x, y}){
    //const  = cuadrado;
    return x * y;
}

console.log(calcularArea(cuadrados));

//uso en react

function Avatar({username, url}){
    return <img src={url} alt={username} />
}