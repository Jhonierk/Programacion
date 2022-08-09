let n = 5;

for (let i = 0; i <= 10; i++ ){
    console.log(`${n} x ${i} = ${n*i}`);
}

console.log('-------------------------------------');

let texts = 'javascript';
let estudiantes= ['alex', 'jhonny', 'kira', 'david'];

//con "in" Cuenta las cantidades de almacenamiento del elemento
for(let dato in texts){
    console.log(dato);
}
console.log('-----------------');

for(let dato in estudiantes){
    console.log(dato);
}
console.log('-------------------------------------');

//con of cuena la los elemetentos en si:
for(let dato of texts){
    console.log(dato);
}

console.log('-----------------');

for(let dato of estudiantes){
    console.log(dato);
}
