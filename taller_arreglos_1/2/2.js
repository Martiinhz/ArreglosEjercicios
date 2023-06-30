//2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
//cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
//(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los elementos del arreglo.



function cadenas(arreglo) {

    let A = "";
    let T = "";
    let C = "";
    let G = "";

    for (let j = 0; j < arreglo.length; j++) {
        let cadena = arreglo[j]

        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === "A") {
                A = A + "A"
            }
            if (cadena[i] === "T") {
                T = T + "T";
            }
            if (cadena[i] === "C") {
                C = C + "C"
            }
            if (cadena[i] === "G") {
                G = G + "G"
            }
        }
    }

    console.log("BASE POR LA LETRA A: ",A, "\n", "BASE POR LA LETRA T: ",T, "\n", "BASE POR LA LETRA C: ",C,"\n" ,"BASE POR LA LETRA G: ",G);
}

cadenas(["AATGAAC, GTTTTTC, GGTAAA, CCCCATGGG"])