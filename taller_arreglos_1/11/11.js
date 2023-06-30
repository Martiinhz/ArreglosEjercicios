//11. Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo.

function numerosImpares(arreglo) {
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 1) {
            contador = contador + 1
        }
        
    }
    console.log("En el arreglo hay una cantidad de:",contador,"impares");
}

let numeros = prompt("Ingrese los numeros seguidos de una coma;").split(",").map(Number)

numerosImpares(numeros)