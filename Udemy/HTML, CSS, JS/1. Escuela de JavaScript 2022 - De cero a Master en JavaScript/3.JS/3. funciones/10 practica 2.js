const primo = (numero) =>{
    let cont = 0;


    let numeros = [];

    for(let i = 0;  i < numero; i++) {
        numeros.push(i+1);
    }

    for (let n of numeros) {
        if(n == 1 || n == numero) {
            continue;
        }
        if(numero % n == 0){
            cont++;
        }
    }

    return cont == 0;

}

console.log(primo(5));
(primo)?(console.log('Es primo')):(console.log('No es primo'));
