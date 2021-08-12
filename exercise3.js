// EJERCICIO 3
// Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

var pregunta2 = prompt("Cual numero?").toLowerCase();
var pregunta2a = pregunta2%2

if (pregunta2a == "0") {
    alert("Numero Par");
}
else
    alert("Numero impar");