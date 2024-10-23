// Para la interación 1 PASOS:
// 1.Hacer un promp para poder preguntar cuantas noches va a estar
const noches = parseInt(prompt("¿Cuántas noches te quieres quedar?"));
const precioPorNoche = 60;

// 2. Calcular el precio total a pegar (60 por noche)
function calcularPrecioNoche(noches, precioPorNoche){
    // 4. Recoge el precio de la función en una variable llamada `costeHotel`
    return noches * precioPorNoche;
    // 3. Devolver el precio

}

// 5. imprímela por pantalla para comprobar que el cálculo es correcto.
//console.log(calcularPrecioNoche(noches,cadanoche));


// Interación 2 . PASOS

const ciudad = prompt("¿Qué ciudad deseas recorrer?").toLowerCase();
// Función para calcular el coste del avión
function calcularCosteAvion(ciudad) {
    if (ciudad === "paris") {
        return 180;
    } else if (ciudad === "boston") {
        return 600;
    } else if (ciudad === "londres") {
        return 120;
    } else {
        return 0; // Si la ciudad no está en la lista, no se aplica ningún coste
    }
}

// Añade una función `calcularCosteAvion()` con estas características:.
// 
// Los costes por ciudad son los siguientes: "Paris": 180 "Boston": 600 "Londres": 120 "
// const costeAvionParis = 180 ;
// const costeAvionBoston = 600 ;
// const costeAvionLondres= 120 ;

// Devolverá fuera de la función un coste en función de dicho parámetro
// Recoge el precio fuera de la función en una variable llamada `costeAvion` e
//  Recibe como parámetro de entrada el nombre de una ciudad que recogeremos con un prompt
// function calcularCosteAvion(ciudad){
// if( ciudad === "paris"){
//     return `el coste del avión és   ${costeAvionParis}`;
// }else if(ciudad === "boston"){
//     return `el coste del avión és ${costeAvionLondres}`  ;
// }
//     else{
//         return `el coste del avión és ${costeAvionLondres}` ;
//     }

// }

// imprime el valor para comprobar que el cálculo es correcto
//console.log(calcularCosteAvion(ciudad));



// Interación 3 PASOS
// Cada día de alquiler cuesta 40 €

//   - Si se alquila por tres o más días se obtiene un descuento de 20 €
//   - Si se alquila por 7 días o más se obtiene un descuento de 50 € (no acumulable con los 20 € de haber alquilado por más de 3 días)
// 1.Añade la función `calcularCosteCoche()` con las características:
// 2.Recibe como parámetro de entrada un número de días de alquiler
// 3. Devuelve el coste en función de dicho parámetro pero teniendo en cuenta los siguientes aspectos:
//   
// 4 .Recoge el precio fuera de la función en una variable llamada costeCoche y
// 5. comprueba que el cálculo es correcto
// Interacción 3: Preguntar por los días de alquiler de coche
const diasDeAlquilerCoche = parseInt(prompt("¿Cuántos días quieres alquilar el coche?"));
const costePorDiaDeAlquilerCoche = 40;

// Función para calcular el coste del alquiler del coche
function calcularCosteCoche(diasDeAlquilerCoche) {
    let coste = diasDeAlquilerCoche * costePorDiaDeAlquilerCoche;
    if (diasDeAlquilerCoche >= 7) {
        return coste - 50; // Descuento de 50€ si alquilas por 7 o más días
    } else if (diasDeAlquilerCoche >= 3) {
        return coste - 20; // Descuento de 20€ si alquilas por 3 o más días
    } else {
        return coste;
    }
}
//console.log(calcularCosteCoche(diasDeAlquilerCoche));


// Interacción 4: Calcular el coste total del viaje
function calcularCosteViaje(noches, ciudad, diasDeAlquilerCoche) {
    const costeHotel = calcularPrecioNoche(noches, precioPorNoche);
    const costeAvion = calcularCosteAvion(ciudad);
    const costeCoche = calcularCosteCoche(diasDeAlquilerCoche);
    
    const costeTotal = costeHotel + costeAvion + costeCoche;
    return costeTotal;
}

// Llamamos a la función calcularCosteViaje y mostramos el resultado
const costeTotalViaje = calcularCosteViaje(noches, ciudad, diasDeAlquilerCoche);
console.log(`El coste total del viaje es: ${costeTotalViaje}€`);
alert(`El coste total del viaje es: ${costeTotalViaje}€`);