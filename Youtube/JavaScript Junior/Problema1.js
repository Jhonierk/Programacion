
// Problema A

/*
3 chicos entran a comprar un helado, el problema es que ellos 
quieren comprar el helado mas caro que pueden comprar con el dinero
que tienen, 

Roberto tiene $1.5 
Pedro tiene $1.7
Cofla tiene $3

Los precios de helados son los siguientes:
Palito de helado de ahgua: $0.6
Palito de helado de cremma: $1
Bombon helado marca heladix: $1.6
Bombon helado marca heladovich: $1.7
Bombon helado marca helardo: $1.8
Potecito de helado con confites: $2.9
Pote de 1/4 Kg: $2.9

Soluciones: 
* Ingresar El monto y mostrar el mas caro (que puedan comprar)
* Su hay 2 o mas con el mismo precio, mostrar ambos
* Indicar el vuelto

*/

dinero1 = prompt("Cuanto dinero tienes cofla?");
dinero2 = prompt("Cuanto dinero tienes pedro?");
dinero3 = prompt("Cuanto dinero tienes roberto?");

dinero1 = parseInt(dinero1);
dinero2 = parseInt(dinero2);
dinero3 = parseInt(dinero3);

if (dinero1 >= 0.6 && dinero1 <= 1){
    alert("Cofla Con tu dinero puedes comprar helado de agua de $0.6");
    alert("Y tu vuelto es de " + (dinero1 - 0.6));
}
else if (dinero1 >= 1  && dinero1 <= 1.6){
    alert("Cofla con tu dinero puedes comprar el helado de crema de $1");
    alert("Y tu vuelto es de " + (dinero1 - 1));
}
else if (dinero1 >= 1.6  && dinero1 <= 1.7){
    alert("Cofla con tu dinero puedes comprar el helado marca heladix de $1.6");
    alerte("Y tu vuelto es de " + (dinero1 - 1.6));
}
else if (dinero1 >= 1.7  && dinero1 <= 1.8){
    alert("Cofla con tu dinero puedes comprar el hhelado marca heladovich de $1.7");
    alert("Y tu vuelto es de " + (dinero1 - 1.7));
}
else if (dinero1 >= 1.8  && dinero1 <= 2.9){
    alert("Cofla con tu dinero puedes comprar el helado de marca helardo de $1.8");
    alert("Y tu vuelto es de " + (dinero1 - 1.8));
}
else if (dinero1 >= 2.9){
    alert("Cofla con tu dinero puedes comprar el helado con confites o el pote de 1/4Kg a $2.9");
    alert("Y tu vuelto es de " + (dinero1 - 2.9));
}
else {
    alert("Lo siento Cofla, no te alcanza el presupuesto");
}


if (dinero2 >= 0.6 && dinero2 <= 1){
    alert("pedro Con tu dinero puedes comprar helado de agua de $0.6");
    alert("Y tu vuelto es de " + (dinero2 - 0.6));
}
else if (dinero2 >= 1  && dinero2 <= 1.6){
    alert("pedro con tu dinero puedes comprar el helado de crema de $1");
    alert("Y tu vuelto es de " + (dinero2 - 1));
}
else if (dinero2 >= 1.6  && dinero2 <= 1.7){
    alert("pedro con tu dinero puedes comprar el helado marca heladix de $1.6");
    alert("Y tu vuelto es de " + (dinero2 - 1.6));
}
else if (dinero2 >= 1.7  && dinero2 <= 1.8){
    alert("pedro con tu dinero puedes comprar el hhelado marca heladovich de $1.7");
    alert("Y tu vuelto es de " + (dinero2 - 1.7));
}
else if (dinero2 >= 1.8  && dinero2 <= 2.9){
    alert("pedro con tu dinero puedes comprar el helado de marca helardo de $1.8");
    alert("Y tu vuelto es de " + (dinero2 - 1.8));
}
else if (dinero2 >= 2.9){
    alert("pedro con tu dinero puedes comprar el helado con confites o el pote de 1/4Kg a $2.9");
    alert("Y tu vuelto es de " + (dinero2 - 2.9));
}
else {
    alert("Lo siento pedro, no te alcanza el presupuesto");
}


if (dinero3 >= 0.6 && dinero3 <= 1){
    alert("roberto Con tu dinero puedes comprar helado de agua de $0.6");
    alert("Y tu vuelto es de " + (dinero3 - 0.6));
}
else if (dinero3 >= 1  && dinero3 <= 1.6){
    alert("roberto con tu dinero puedes comprar el helado de crema de $1");
    alert("Y tu vuelto es de " + (dinero3 - 1));
}
else if (dinero3 >= 1.6  && dinero3 <= 1.7){
    alert("roberto con tu dinero puedes comprar el helado marca heladix de $1.6");
    alert("Y tu vuelto es de " + (dinero3 - 1.6));
}
else if (dinero3 >= 1.7  && dinero3 <= 1.8){
    alert("roberto con tu dinero puedes comprar el hhelado marca heladovich de $1.7");
    alert("Y tu vuelto es de " + (dinero3 - 1.7));
}
else if (dinero3 >= 1.8  && dinero3 <= 2.9){
    alert("roberto con tu dinero puedes comprar el helado de marca helardo de $1.8");
    alert("Y tu vuelto es de " + (dinero3 - 1.8));
}
else if (dinero3 >= 2.9){
    alert("roberto con tu dinero puedes comprar el helado con confites o el pote de 1/4Kg a $2.9");
    alert("Y tu vuelto es de " + (dinero3 - 2.9));
}
else {
    alert("Lo siento roberto, no te alcanza el presupuesto");
}