//Cree una función que reciba un arreglo de números y retorne el número menor entre todos los elementos del arreglo.


function numeroMenor(arregloNumeros) {

    if (arregloNumeros.length === 0) {
        return null;
    }else{
        let menor = arregloNumeros[0]
        for (let i = 0; i < arregloNumeros.length; i++) {
            if (arregloNumeros[i] < menor) {
                menor = arregloNumeros[i]
            }
            
        }
        return menor
    }
}

let arregloNumeros = [3,4,5,67,3,1,5,7,9];
let resultado = numeroMenor(arregloNumeros)

console.log("el valor menor del arreglo es:",resultado);