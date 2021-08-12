
// EJERCICIO 10
/* 
Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses
*/
var course = 4999;
var carrera = 3999;
var master = 2999;
var facebook = 0.2;
var google = 0.1;
var jesua = 0.5;

var pregunta10a = prompt ("Cual programa educativo te inscribes? Master, Course, Carrera").toLowerCase();
var pregunta10b = prompt ("Cual beca educativo con la que te inscribes? facebook, google, jesua").toLowerCase();

if (pregunta10a == "course") {
    if (pregunta10b == "facebook") {
        console.log("Vas a pagar la cantidad de: " +((course-(course*facebook))/2))
    }
    else if (pregunta10b == "google") {
        console.log("Vas a pagar la cantidad de: " +((course-(course*google))/2))
    }
    else if (pregunta10b == "jesua") {
        console.log("Vas a pagar la cantidad de: " +((course-(course*jesua))/2))
    }
}



else if (pregunta10a == "carrera") {
    if (pregunta10b == "facebook") {
        console.log("Vas a pagar la cantidad de: " +((carrera-(carrera*facebook))/6))
    }
    else if (pregunta10b == "google") {
        console.log("Vas a pagar la cantidad de: " +((carrera-(carrera*google))/6))
    }
    else if (pregunta10b == "jesua") {
        console.log("Vas a pagar la cantidad de: " +((carrera-(carrera*jesua))/6))
    }
}


else if (pregunta10a == "master") {
    if (pregunta10b == "facebook") {
        console.log("Vas a pagar la cantidad de: " +((master-(master*facebook))/12))
    }
    else if (pregunta10b == "google") {
        console.log("Vas a pagar la cantidad de: " +((master-(master*google))/12))
    }
    else if (pregunta10b == "jesua") {
        console.log("Vas a pagar la cantidad de: " +((master-(master*jesua))/12))
    }
}

