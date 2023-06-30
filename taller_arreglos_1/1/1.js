//1. Dado el arreglo [1,2,3,4,5,6]:
//a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.

//b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.

//c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.

//d) Calcular el promedio de todos los elementos del arreglo

//a
console.log("CICLO WHILE");
let arreglo = [1,2,3,4,5,6];
let acumuladora = [];
let contador = 0;
while (contador < arreglo.length) {
    console.log(arreglo[contador]);
    contador++
}

//b
console.log("------------------");
console.log("CICLO FOR");
for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index]);
}



//c
let acumuladora2 = 0;
console.log("------------------");
console.log("AUMENTADOS EN 1");
for (let i = 0; i <= 1; i++) {
    acumuladora2 = arreglo.slice();
}

for (let j = 0; j < acumuladora2.length; j++) {
    console.log(acumuladora2[j] + 1);
}

//d
console.log("-----------------------");
console.log("Promedio de todos los elementos");
let acumuladora3=0;
arreglo.forEach( k=>{
    acumuladora3 = acumuladora3 + k
})
let promedio = acumuladora3/arreglo.length
console.log(promedio);