import java.util.Scanner;

public class ConversorTemperatura {
    // Método para convertir Celsius a Fahrenheit
    public double celsiusAFahrenheit(double temperatura) {
        return (temperatura * 9 / 5) + 32;
    }

    // Método para convertir Fahrenheit a Celsius
    public double fahrenheitACelsius(double temperatura) {
        return (temperatura - 32) * 5 / 9;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ConversorTemperatura conversor = new ConversorTemperatura();

        while (true) {
            System.out.println("Menú de Conversión de Temperatura");
            System.out.println("1. Celsius a Fahrenheit");
            System.out.println("2. Fahrenheit a Celsius");
            System.out.println("3. Salir");

            System.out.print("Ingrese su opción: ");
            int opcion = scanner.nextInt();

            if (opcion == 3) {
                break;
            }

            System.out.print("Ingrese la temperatura a convertir: ");
            double temperatura = scanner.nextDouble();

            switch (opcion) {
                case 1:
                    double resultado = conversor.celsiusAFahrenheit(temperatura);
                    System.out.printf("%.2f°C es igual a %.2f°F\n", temperatura, resultado);
                    break;
                case 2:
                    resultado = conversor.fahrenheitACelsius(temperatura);
                    System.out.printf("%.2f°F es igual a %.2f°C\n", temperatura, resultado);
                    break;
                default:
                    System.out.println("Opción inválida");
            }
        }

        scanner.close();
    }
}