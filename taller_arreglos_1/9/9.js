//9. Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.

function verificadorPromedio(arreglo1,arreglo2) {
    let acumuladora1 = 0;
    for (let i = 0; i < arreglo1.length; i++) {
        acumuladora1 = acumuladora1 + arreglo1[i]
    }

    let acumuladora2 = 0;
    for (let j = 0; j < arreglo2.length; j++) {
        acumuladora2 = acumuladora2 + arreglo2[j]
    }

    let promedio1 = acumuladora1/arreglo1.length
    let promedio2 = acumuladora2/arreglo2.length
    if (promedio1 > promedio2) {
        console.log(promedio1);
        console.log("El arreglo1 tiene mayor promedio");
    }else if(promedio2 > promedio1) {
        console.log(promedio2);
        console.log("El arreglo2 tiene mayor promedio");
    }
}

let arreglo1 = prompt("Ingrese los numeros separados por coma:").split(",").map(Number)
let arreglo2 = prompt("Ingrese los numeros separados por coma:").split(",").map(Number)

verificadorPromedio(arreglo1,arreglo2)