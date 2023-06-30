//Lectura y recorrido de cadenas

let mensaje = "Somos programadores";
console.log(mensaje[11]); //imprime a
console.log(mensaje[15]); //imprime o
console.log(mensaje.length); //imprime 19

let mensaje1 = "Somos programadores";
for (let index = 0; index < mensaje1.length; index++) {
  console.log(mensaje1[index]); //imprimirá cada caracter de la cadena
}

//1.Dada la cadena “Javascript es un buen lenguaje”:
//a) Leer e imprimir los elementos de índices 3, 6, 8
//b) Recorra la cadena usando ciclo for

let cadena = "Javascript es un buen lenguaje";
console.log(cadena[3]);
console.log(cadena[6]);
console.log(cadena[8]);
for (i = 0; i < cadena.length; i++) console.log(cadena[i]);

//2.Dada la cadena “Somos SENA”:
//c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
//d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
//variable contadora para contar el número de veces que se encuentra la letra “o”.

let cadena2 = "Somos SENA";
contador = 0;
for (let i = 0; i < cadena2.length; i++) {
  if (cadena2[i] === "E") {
    break;
  }
}

if (cadena2) {
  console.log("La cadena si tiene la letra E");
} else {
  console.log("La cadena no contiene la letra E");
}

for (let i = 0; i < cadena2.length; i++) {
  if (cadena2[i] === "o") {
    contador++;
  }
}

console.log("la letra o aparecen", contador, "veces en la cadena");

//3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.

let cadena3 = "Javascript es genial";
let contadorPalabras = 0;
for (let i = 0; i < cadena3.length; i++) {
  if (cadena3[i] === " ") contadorPalabras++;
}
console.log("La cadena tiene", contadorPalabras, "palabras");
