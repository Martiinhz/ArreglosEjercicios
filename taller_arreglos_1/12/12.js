//12. Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número de Timina (T). Se le debe pedir al usuario que introduzca los arreglos.

function obtenerCadenaMayorTimina(arrCadenas) {
    let cadenaMayorTimina = '';
    let cantidadTiminaMax = 0;
  
    for (let i = 0; i < arrCadenas.length; i++) {
      const cadena = arrCadenas[i];
      const cantidadTimina = (cadena.match(/T/g) || []).length;
  
      if (cantidadTimina > cantidadTiminaMax) {
        cadenaMayorTimina = cadena;
        cantidadTiminaMax = cantidadTimina;
      }
    }
  
    return cadenaMayorTimina;
  }

const cadenasADN = prompt("Ingrese las cadenas de ADN separadas por coma:").split(",");
const cadenaMayorTimina = obtenerCadenaMayorTimina(cadenasADN);
console.log("La cadena de ADN con mayor número de timina (T) es:", cadenaMayorTimina);