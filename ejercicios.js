// Taller Usando lo anteriormente expuesto, manejando el número de índices correctos en cada caso, resuelva:

function arreglos1(){
let arreglo = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

console.log(arreglo[0][1]);
console.log(arreglo[1][0]);
console.log(arreglo[2][2]);
console.log(arreglo[2][1]);
}
arreglos1();

function arreglos2(){
let arreglo2 =  [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ];

console.log(arreglo2[1][0][3]);
console.log(arreglo2[2][0][2]);
console.log(arreglo2[0][0][2]);
console.log(arreglo2[0][0][0]);
}
arreglos2();

/*e) arreglo[0][0][2] devolverá = true
f) arreglo[2][0][0] devolverá = 44
g) arreglo[1][0][3] devolverá = 99
h) arreglo[0][1][1] devolverá = error*/

function arreglos3 (){
let arreglo3 = [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ];

console.log(arreglo3[1][0][1]);
console.log(arreglo3[2][0][0][0][0]);
console.log(arreglo3[0][1][1]);
console.log(arreglo3[1][1][0][0]);
console.log(arreglo3[3]);
}
arreglos3();

function arreglos4() {
    let arreglo4 = [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ];
    //Actualizar
    arreglo4[1][1] = "?";
    console.log(arreglo4[1][1]);
    arreglo4[3][1] = 9
    console.log(arreglo4[3][1]);
    arreglo4[0][0] = "¡"
    console.log(arreglo4[0][0]);
    //eliminacion
    console.log(arreglo4[1].splice(2,1));
    console.log(arreglo4);
    console.log(arreglo4[0].splice(2,1));
    console.log(arreglo4);
    console.log(arreglo4[3].splice(2,1));
    console.log(arreglo4);
    
}
arreglos4();

let arregloBidimensional = [[20, 80, 30], [10, 20, 50],[70, 60, 40]];
//El siguiente ciclo recorre los elementos que conforman el arreglo
//arregloBidimensional es decir, [20, 80, 30], [10, 20, 50],[70, 60, 40]
for (let i = 0; i < arregloBidimensional.length; i++) {
//El siguiente ciclo recorre los elementos de cada elemento del arreglo
//arregloBidimensional, es decir 20, 80, 30, 10, 20, 50 , 70, 60, 40
for (let j = 0; j < arregloBidimensional[i].length; j++) {
//Acá se imprime cada elemento más interno del arreglo
console.log(arregloBidimensional[i][j]);
}
}

let arregloMixto = [ ["w", true, 4], [3, 99], [4, 6, 7, 8] ];
for (let i = 0; i < arregloMixto.length; i++) {
for (let j = 0; j < arregloMixto[i].length; j++) {
console.log(arregloMixto[i][j]);
}
}

//let arregloBidimensional = [[20, 80, 30], [10, 20, 50],[70, 60, 40]];
//El siguiente ciclo recorre los elementos que conforman el arreglo
//arregloBidimensional es decir, [20, 80, 30], [10, 20, 50],[70, 60, 40]
arregloBidimensional.forEach(i => {
//El siguiente ciclo recorre los elementos de cada elemento del arreglo
//arregloBidimensional, es decir 20, 80, 30, 10, 20, 50 , 70, 60, 40
i.forEach(j => {
//Acá se imprime cada elemento más interno del arreglo
console.log(j);
})
})

let arreglo1 = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];
for (let i = 0; i < arreglo1.length; i++) {
for (let j = 0; j < arreglo1[i].length; j++) {
console.log(arreglo1[i][j]);
}
}

let arreglo2 = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

arreglo2.forEach(i => {
i.forEach(j => {
console.log(j);
})
})

let arreglo3 =[ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,66, 77], [1, 2, 3, 4] ] ];
for (let i = 0; i < arreglo3.length; i++) {
for(let j = 0;j < arreglo3[i].length;j++){
for(let m = 0;m < arreglo3[j].length; m++)
    console.log(arreglo3[i][j][m]);
    }
}
let arreglo4 = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,66, 77], [1, 2, 3, 4] ] ];

arreglo4.forEach(i =>{
i.forEach(j =>{
j.forEach(m =>{
    console.log(m);
})
})
})

let arreglo5 = [[2, 8, 9], [30, 71, 77], [11, 990, 41]];

for (let i = 0; i < arreglo5.length; i++) {
  for (let j = 0; j < arreglo5[i].length; j++) {
    const numero = arreglo5[i][j];
    if (numero % 2 !== 0) {
      console.log(numero);
    }
  }
}

let arreglo6 = [[2, 8, 9], [30, 71, 77], [11, 990, 41]];
let suma = 0;

for (let i = 0; i < arreglo6.length; i++) {
for(let j = 0; j < arreglo6[i].length; j++) {
    suma += arreglo6[i][j];
}
}
console.log(suma);


