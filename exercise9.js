// EJERCICIO 9
/* 
Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
*/
var pregunta9a = prompt("Quieres comprar un helado").toLowerCase();
var helado=50
var oreo=10;
var kitkat=15;
var brownie=20;

if (pregunta9a == "si") {
    var pregunta9b = prompt("quieres toppings con tu helado?").toLowerCase();
        if (pregunta9b == "si") {
            console.log("Los toppings disponibles son: Oreo, KitKat, Brownie");
            var pregunta9c = prompt("Cual topping quieres?").toLowerCase();
                if (pregunta9c == "oreo") {
                    console.log("El precio de tu helado es de " + helado + "toping oreo: " + oreo + " total: " + (helado+oreo));
                }
                else if (pregunta9c == "kitkat") {
                    console.log("El precio de tu helado es de " + helado + "toping kitkat: " + kitkat + " total: " + (helado+kitkat));
                }
                else if (pregunta9c == "brownie") {
                    console.log("El precio de tu helado es de " + helado + "toping brownie: " + brownie + " total: " + (helado+brownie));
                }

        }
        else console.log("el precio de tu helado es de: " + helado);

}
else console.log("gracias por no comprar nada");
