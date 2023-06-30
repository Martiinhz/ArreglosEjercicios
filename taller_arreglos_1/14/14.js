//14. Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente. Se le debe pedir al usuario que introduzca el arreglo.

function ordenarArreglo(arrLetras) {
    return arrLetras.sort();
  }

const letras = prompt("Ingrese las letras separadas por coma:").split(",");
const arregloOrdenado = ordenarArreglo(letras);
console.log("Arreglo ordenado alfabéticamente:", arregloOrdenado);