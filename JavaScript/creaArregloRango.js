let inicio, fin;

// Crear arreglo con números del rango
function crearArregloConRango(inicio, fin){
  let arreglo = [];
  for (let i = inicio; i <= fin; i++) {
    arreglo.push(i);
  }
// Imprimir arreglo
console.log("Arreglo de números del rango:");
console.log(arreglo);
}

crearArreglo(2,9)
