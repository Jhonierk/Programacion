
//Sentencia while del 0 al 9
let cont = 1;
while(cont < 10){
    console.log(cont);
    cont++
}

//Sentencia do while

do{
    console.log(cont);
    cont++
}while(cont<10);

//Do while
let contador = 1;
do {
    contador++;

    if(contador > 5){
        continue;
    }
    console.log(contador);
}while(contador < 10);