let menuVege = ["Ensalada natural", " Ensalada cesar", " Sopa de tomate"];
let menuCarne = ["Carne a la parrilla", " Costilla BBQ", " Brocheta"];

let vegetariano = true;


function menu (vegetariano){
    
    if (vegetariano){
        console.log("Menu Vegetariano: "+ menuVege);
    }else if(!vegetariano){
        console.log("Menu no Vegetariano: "+ menuCarne);
    }else{
        console.log("Error al digitar")
    }
    return vegetariano;
}

let respuesta = menu(vegetariano);