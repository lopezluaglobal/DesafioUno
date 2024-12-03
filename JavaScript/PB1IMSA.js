// Función para calcular IMC
function calcularIMC(peso, estatura) {
    // Fórmula para calcular IMC: peso (kg) / estatura (m)²
    const imc = peso / Math.pow(estatura / 100, 2);
    return imc.toFixed(2);
  }
  
  // Función para clasificar IMC
  function clasificarIMC(imc) {
    if (imc < 18.5) {
      return "Bajo peso";
    } else if (imc < 25) {
      return "Peso normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else if (imc < 35) {
      return "Obesidad grado 1";
    } else if (imc < 40) {
      return "Obesidad grado 2";
    } else {
      return "Obesidad grado 3";
    }
  }
  
  // Solicitar ingreso de peso y estatura
  const peso = prompt("Ingrese su peso en kg:");
  const estatura = prompt("Ingrese su estatura en cm:");
  
  // Calcular IMC
  const imc = calcularIMC(parseFloat(peso), parseFloat(estatura));
  
  // Clasificar IMC
  const clasificacion = clasificarIMC(parseFloat(imc));
  
  // Mostrar resultado
  alert(`Su IMC es ${imc} (${clasificacion})`);