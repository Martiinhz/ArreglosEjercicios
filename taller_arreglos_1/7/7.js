//7. Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,“Banano”, “Lechuga”, “Perejíl”] 

//Ordene los arreglos de tal manera que los elementos(frutas y verduras) queden en el arreglo que les corresponde. Use ciclos.

let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"]
let arreglo2 = ["Manzana","Banano", "Lechuga", "Perejíl"]

let frutas = arreglo1.slice()
frutas.splice(1,1)
frutas.splice(0,0,"Manzana","Banano")
console.log("FRUTAS");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("---------------------");
console.log("VERDURAS");

let verduras = arreglo2.slice()
verduras.splice(0,2)
verduras.splice(0,0,"Cebolla",)
for (let j = 0; j < verduras.length; j++) {
    console.log(verduras[j]);
    
}
