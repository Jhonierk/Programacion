let n = -5, print ="";

if(n !== 0){
    if(n>0){
        if(n % 2 == 0){
            print= `El numero ${n} es par positivo`;
         }
         else{
            print= `El numero ${n} es impar positivo`;
         }
    } else{
        if(n % 2 == 0){
            print= `El numero ${n} es par negativo`;
        }else{
            print= `El numero ${n} es impar negativo`;
        }
    }
}   else{
    print = `El numero ${n} es neutro`;
}





 console.log(print);