// EJERCICIO 7
// Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

var pregunta7 = prompt ("Introduce un día de la semana").toLowerCase();
if (pregunta7 == "lunes") {
    console.log("Felicidades por ser lunes")
}
else if (pregunta7 == "viernes") {
    console.log("Felicidades por ser viernes")
}
else if (pregunta7 == "sabado") {
    console.log("Felicidades por ser sabado")
}
else if (pregunta7 == "domingo") {
    console.log("Felicidades por ser domingo")
}
else console.log("Felicidades por ser otro dia")
