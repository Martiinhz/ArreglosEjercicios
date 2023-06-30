//5. Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
//nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de edad.

function obtenerUsuariosMayoresDeEdad() {
    let n = parseInt(prompt("Ingrese el número de usuarios:"));
    let usuariosMayoresDeEdad = [];
  
    for (let i = 0; i < n; i++) {
      let nombre = prompt("Ingrese el nombre del usuario " + (i + 1) + ":");
      let edad = parseInt(prompt("Ingrese la edad del usuario " + (i + 1) + ":"));
  
      if (edad >= 18) {
        usuariosMayoresDeEdad.push(nombre);
      }
    }
  
    console.log("Usuarios mayores de edad:");
    console.log(usuariosMayoresDeEdad);
  
    console.log("Cantidad de usuarios mayores de edad: " + usuariosMayoresDeEdad.length);
  }
obtenerUsuariosMayoresDeEdad()
