//lo que hace la funcion fecha es reducir la sintaxis de una funcon normal

/*
//Normalmente una funcion se realiza de la siguiente manera:

function sumar(a,b){
    return a+ b;

}
*/

//Ahora con la funcion fecha se le tiene que asignar en una variable se realiza asi:

const sumar = (a,b) => a+b;
console.log(sumar(10,5));

//Otra manera de funcion flecha pero mas estensa
const saludar = () =>{
    console.log("Hola mundo");
}
saludar();