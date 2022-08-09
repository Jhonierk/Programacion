
        let miArray = [4, 8, 32, 32, 13, 17, 24];

        //Se crea el objeto 
        let resultado = (array) => {
            let max = Math.max(...array);
            let min = Math.min(...array);
            let suma = array.reduce((cont, valor) => cont + valor);
            let promedio = suma / array.length;
            return{
                max,
                min,
                suma,
                promedio
            }
        }

        let darResultado = resultado(miArray);
        console.log(darResultado);
//Commo respuesta da:
//{ max: 32, min: 4, suma: 130, promedio: 18.571428571428573 }
