// EJERCICIO 8
// Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

var pregunta8 = prompt("Introduzca un numero del 1 al 10");

if (pregunta8 <= 10 && pregunta8 >= 0) {
    if (pregunta8 < 6) {
        console.log("estas reprobado")
    }
    else if (pregunta8 >= 6 && pregunta8 <= 8) {
        console.log ("Regular")
    }
    else if  (pregunta8 == 9) {
        console.log ("Bien")
    }
    else if  (pregunta8 == 10) {
        console.log ("Excelente")
    }
}
else console.log("Numero no esta en el rango")
