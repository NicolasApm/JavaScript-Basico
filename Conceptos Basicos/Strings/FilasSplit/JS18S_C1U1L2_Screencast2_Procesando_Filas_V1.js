/*

Dada una fila que tiene el nombre y apellido separado ','
Retornar el nombre y apellido con la primera letra en mayuscula
y el resto en minuscula.

Ejemplo: para la fila `    luiS, BLANCO    `
El resultado es `Luis Blanco`

*/

function capitalize(x){
  return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
}

function procesarFila(fila){
  var arreglo = fila.split(",");
  var nombre = arreglo[0].trim();
  var apellido = arreglo[1].trim();
  return capitalize(nombre) + " " + capitalize(apellido);
}

var fila = " anA, BLANCO    ";
console.log(procesarFila(fila));
