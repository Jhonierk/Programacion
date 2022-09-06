//Encapsulamiento trata de volver privado la pripiedades y metodos
class Persona{
    //Propiedades privadas
    #nombre;
    #edad;

    //constructor
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#metodoPrivado();
    }

    //sirve para modificar
    set setNombre(nombre){
        this.#nombre = nombre;
    }

    ///Sirve para obtener el

    get getNombre(){
        return this.#nombre;
    }

    set setEdad(edad){
        this.#edad = edad;
    }

    get getEdad(){
        return this.#edad;
    }

    //metodo privado
    #metodoPrivado(){
        console.log("Soy metodo privado");
    }
    
}

const p1 = new Persona('alex', 26)
console.log(p1);

//modifica los datos set 
p1.setNombre = 'Kira'
console.log(p1);
