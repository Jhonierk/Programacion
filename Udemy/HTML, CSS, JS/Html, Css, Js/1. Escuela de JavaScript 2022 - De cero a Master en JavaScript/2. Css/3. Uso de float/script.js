/*
Practica 01: Descuentos de un restaurante

Enunciado: un restaurante ofrece un descuento del 10% para consumo de hasta s/. 100.00 y un descuento del 20 % para consumos mayores, para ambos casos se aplica un impuesto del 19%. Determinar el monto del descuento, el impuesto y el importe a pagar.

Análisis: para la solución de este problema, se requiere que el usuario ingrese el consumo y el sistema verifica y calcula el monto del descuento, el impuesto y el importe a pagar.

    monto del descuento

    impuesto

    importe a pagar  
*/

// entrada de datos

let consumo = Number(prompt('Ingrese el consumo:'));

let descuento, datoDescuento;

//Proceso de datos
if (consumo <=  100){
    //DEscuento 10%
    datoDescuento = '10%';
    descuento = consumo * 0.10;
}else if( consumo > 100){
    //DEscuento 20%
    datoDescuento = '20%';
    descuento = consumo * 0.20;
}

let montoDescuento = consumo - descuento;
let igv = montoDescuento * 0.19;
let totalPagar = montoDescuento + igv;

//Salidda de datos
document.write(`<pre>
                Consumo:                ${consumo}
                Descuento:              ${datoDescuento}
                Monto con descuento:    ${montoDescuento}
                IGB:                    ${igv}
                Total a pagar:          ${totalPagar}
                </pre>
`)