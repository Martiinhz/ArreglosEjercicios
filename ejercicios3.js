//1. Dado el arreglo [1,2,3,4,5,6]:
//a) Iterar por todos los elementos dentro del arreglo //utilizando while y mostrarlos en pantalla.

let arreglo1 = [1,2,3,4,5,6];
let i = 0;

while (i < arreglo1.length) {
    console.log(arreglo1[i]);
    i++
}


//b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
let arreglo2 = [1,2,3,4,5,6];

for (let i = 0; i < arreglo2.length;i++) {
    console.log(arreglo2[i]);
}

//c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.

let arreglo3 = [1,2,3,4,5,6];
let clone = [];
for (i = 0; i < arreglo3.length; i++){
    clone[i] = arreglo3[i] + 1;
}
console.log(clone);

//d) Calcular el promedio de todos los elementos del arreglo

let arreglo4 = [1,2,3,4,5,6];
let suma = 0;

for(let i = 0;i < arreglo4.length; i++){
    suma += arreglo4[i];
}

let promedio = suma / arreglo4.length;
console.log(promedio);

//2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, /“GGTAAA”, “CCCCATGGG”]
//cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
//(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los elementos del arreglo.

function ADN(h) {
    let resultArr = [];
  
    for (let i = 0; i < h.length; i++) {
      let z = h[i];
      let verdadero = true;
  
      for (let j = 0; j < z.length; j++) {
        if (z[j] !== z[0]) {
          verdadero = false;
          break;
        }
      }
  
      if (verdadero) {
        resultArr.push(z);
      }
    }
  
    console.log("Cadenas de una sola base: " + resultArr.join(", "));
  }

  let dnaArr = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];
  ADN(dnaArr);

//3. Cree una función que reciba un arreglo de números y retorne el número menor entre todos loselementos del arreglo.

function numeros(m){
    let menor = m[0];
    for (let i =0; i < m.length; i++){
    if (m[i] < menor) {
      menor = m[i];  
    }
}
return menor;
}

let l = [5,6,44,2,8,56];
let numeroMenor = numeros(l);
console.log(numeroMenor);




  

