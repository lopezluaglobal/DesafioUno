import java.util.Scanner;

public class PB1IMS {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese su peso en kilogramos: ");
        double peso = scanner.nextDouble();

        System.out.print("Ingrese su estatura en metros: ");
        double estatura = scanner.nextDouble();

        double imc = calcularIMC(peso, estatura);
        String categoria = obtenerCategoriaIMC(imc);

        System.out.printf("Su IMC es: %.2f\n", imc);
        System.out.println("Categoría: " + categoria);

        scanner.close();
    }

    private static double calcularIMC(double peso, double estatura) {
        return peso / (estatura * estatura);
    }

    private static String obtenerCategoriaIMC(double imc) {
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
}