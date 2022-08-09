let arr = ["ejem1", " ejem2", " ejem3", " ejem4", " ejem5"];

function canciones(i){

    for(let i in arr.length){
        arr = i;
    }

    return `Mi lista de canciones preferidas: ${[i]}`;
}

let imprimir = canciones(arr);
console.log(imprimir);