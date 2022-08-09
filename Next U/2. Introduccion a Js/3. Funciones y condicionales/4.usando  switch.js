let color = "azul";

switch (color){
    case "rojo":
        console.log("FF0000");
        break;
    case "negro":
        console.log("000000");
        break;
    case "azul":
        console.log("0000FF");
        break;
    default:
        console.log("Error");
}

/**El switch reemplaza este codigo */
if (color == "rojo"){
    console.log("FF000000");
}else if(color == "negro"){
    console.log("000000");
}else if(color == azul){
    console.log("0000FF");
}else{
    console.log("Error");
}