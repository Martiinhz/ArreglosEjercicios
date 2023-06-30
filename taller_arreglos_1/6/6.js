//6. Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”, “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
//queden en el arreglo que les corresponde. Use ciclos.


let valle = ["Cali" , "Tulua", "Cartago", "Salento"]

let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"]

console.log("Ciudades valle desorganizada");
console.log(valle);

console.log("Ciudades quindio desorganizada");
console.log(quindio);

console.log("-------------------------");
console.log("CIUDADES DEL VALLE ORGANIZADAS");

for (let i = 0; i < valle.length; i++) {
    valle.splice(2)
}

valle.splice(0,0,"Cordoba","Palmira")
for (let k = 0; k < valle.length; k++) {
    console.log(valle[k]);
}

console.log("------------------------");
console.log("CIUDADES DEL QUINDIO ORGANIZADAS");

quindio.splice(0,1)
quindio.splice(1,1)
quindio.splice(0,0, "Cartago", "Salento");

for (let j = 0; j < quindio.length; j++) {
    console.log(quindio[j]);
}