

//Clase basica para crear objetos:

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`${this.nombre} ${this.edad}`);
    }
}


//Instancia de la clase persona
//con esto estamos diciendo que estamos construyendo un objeto de la clase persona:
const p1 = new Persona('alex', 26);
const p2 = new Persona('Kira', 8);


//imprimir aatraves de la funcion de la clase
p1.imprimir();
p2.imprimir();
