// EJERCICIO 2
//Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm

var pregunta2 = prompt("Cual numero?").toLowerCase();
var pregunta2a = pregunta2%2

if (pregunta2a == "0") {
    console.log("es divisible entre 2");
}
else
    console.log("es numero impar");