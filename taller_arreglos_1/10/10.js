//10. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que introduzca el arreglo

function verificadorLetraC(arreglo) {
    let contador = 0;

    for (let i = 0; i < arreglo.length; i++) {
        let nombre = arreglo[i].toLowerCase()
        if (nombre.includes("c")) {
            const cantidadC = (nombre.match(/c/g) || []).length;
            contador+= cantidadC
        }
        
    }
    if (contador > 0) {
        console.log("La letra c aparece:",contador, "veces entre los nombres.");
    }
}

let nombres = prompt("Ingrese los nombres seguidos de una coma:").split(",")

verificadorLetraC(nombres)