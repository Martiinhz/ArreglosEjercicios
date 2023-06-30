//4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en él.

function encontrarPrimosArreglos(arreglo) {

  function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
       if (numero % i === 0) {
        return false
       }
        
    }
    return true
  }

  for (let i = 0; i < arreglo.length; i++) {
    if (esPrimo(arreglo[i])) {
     console.log(arreglo[i]);   
    }
    
  }
}

let arreglo = [1,2,3,4,5,6,7,8,9,10]

encontrarPrimosArreglos(arreglo)
