function buscarMayor() {
    const arreglo = document.getElementById('arreglo').value.split(',').map(Number);
    const indice = parseInt(document.getElementById('indice').value);
  
    if (indice >= arreglo.length) {
      alert("El índice es mayor que la longitud del arreglo");
      return;
    }
  
    let mayor = arreglo[0];
    for (let i = 0; i <= indice; i++) {
      if (arreglo[i] > mayor) {
        mayor = arreglo[i];
      }
    }
    document.getElementById('resultado').innerText = `El número más grande encontrado es: ${mayor}`;
}  