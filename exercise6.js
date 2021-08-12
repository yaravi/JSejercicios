// EJERCICIO 6
// Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

var pregunta6a = prompt("Introduce el primer número");
var pregunta6b = prompt("Introduce el segundo número");
var pregunta6c = prompt("Introduce el tercer número");

if (pregunta6a >= pregunta6b && pregunta6a >= pregunta6c) {
    console.log("es mayor: " + pregunta6a)
}
else if (pregunta6b >= pregunta6a && pregunta6b >= pregunta6c) {
    console.log("es mayor: " + pregunta6b)
}
else if (pregunta6c >= pregunta6a && pregunta6c >= pregunta6b) {
    console.log("Es mayor: " + pregunta6c)
}
