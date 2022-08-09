const carro ={
    marca: "Tesla",
    model: "CyberTruck",
}


let modelo;
/*
if(carro.model){
    modelo = carro.model;
}else{
    modelo = 'x';
}
*/

(carro.model) ? (modelo = carro.model) : (modelo = 'x');
console.log(modelo);