//13. Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo.

function ordenarArreglo(arrNumeros) {
    return arrNumeros.sort((a, b) => a - b);
  }

const numeros = prompt("Ingrese los números separados por coma:").split(",").map(Number);
const arregloOrdenado = ordenarArreglo(numeros);
console.log("Arreglo ordenado:", arregloOrdenado);