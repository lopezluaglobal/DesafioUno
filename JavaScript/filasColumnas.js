function crearTabla() {
    // Solicitar número de filas y columnas al usuario
    let filas = prompt("Ingrese el número de filas:");
    let columnas = prompt("Ingrese el número de columnas:");
  
    // Convertir inputs a números enteros
    filas = parseInt(filas);
    columnas = parseInt(columnas);
  
    // Crear tabla
    let tabla = document.createElement("table");
    tabla.border = 1; // Agregar borde a la tabla
  
    // Agregar filas y columnas
    for (let i = 0; i < filas; i++) {
      let fila = tabla.insertRow(i);
      for (let j = 0; j < columnas; j++) {
        let celda = fila.insertCell(j);
        celda.innerHTML = `Celda ${i + 1},${j + 1}`;
      }
    }
  
    // Agregar tabla al documento
    document.body.appendChild(tabla);
  }
  
  // Llamar función
  crearTabla();