//guardando en una variable constante la funcion de imprimir por consola
const c = console.log;

//Construccion de un objeto
const persona = {
    nombre : 'Jhonnyer',
    apellido: 'Otalvaro',
    edad : '26',

    ///contruccion de un metodo:
    //metodo constructor
    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    },
     //Como esta dentro de una lista al finalzar se pone una coma


    //otra lista
    trajes: ['traje 1', 'traje 2', 'traje 3'],

    //objeto anidado:
    direccion: {
        zip: '102981',
        pais: 'Colombia',
        depart: 'Calle 71'
    }
}

//Imprimiendo atra vez del objeto
c(persona.nombre);


//imprimiendo atraves del metodo construtor:
c(persona.nombreCompleto());

//imprime por pocision
c(persona.trajes[0]);

//acceder a un objeto aninado:
c(persona.direccion);

//acceder a un elemento del objeto aninado:
c(persona.direccion.pais)