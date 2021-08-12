
// EJERCICIO 11
/*
Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5. 
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué: 
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
*/
var coche = 0.2;
var moto =  0.1;
var bus = 0.5;

var pregunta11a = prompt("Que transporte utilizas? coche, moto o bus").toLowerCase();
var pregunta11b = prompt ("Cuantos kilometros recorriste");

if (pregunta11b >= 0 %% pregunta11b <= 100) {
    if (pregunta11a == "coche") {
        console.log ("vas a pagar la cantidad de: ")
    }

}