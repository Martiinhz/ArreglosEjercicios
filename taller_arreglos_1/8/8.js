//8. Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le debe pedir al usuario que introduzca el arreglo.

function numeroMayor(arreglo) {
    if (arreglo.length === 0) {
        return null
    }else{
        let mayor = arreglo[0]
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] > mayor) {
                mayor = arreglo[i]
            }
            
        }
        return mayor
    }
}
let numeros = prompt("ingrese los numeros separados por coma:").split(",").map(Number)
let resultado = numeroMayor(numeros)

console.log("El valor mayor del arreglo es:",resultado);