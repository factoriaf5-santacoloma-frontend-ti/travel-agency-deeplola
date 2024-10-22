// Para la interación 1 PASOS:
// 1.Hacer un promp para poder preguntar cuantas noches va a estar
const noches = prompt("Cuantas noches te quieres quedar?");
const cadanoche = 60;
// 2. Calcular el precio total a pegar (60 por noche)
function calcularPrecioNoche(noches,cadanoche){
    let resultado = noches * cadanoche;
    // 3. Devolver el precio
    return resultado;
}
console.log(calcularPrecioNoche(noches,cadanoche));


// 4. Recoge el precio de la función en una variable llamada `costeHotel`
// 5. imprímela por pantalla para comprobar que el cálculo es correcto.

// Interación 2 . PASOS
// Añade una función `calcularCosteAvion()` con estas características:.
//  Recibe como parámetro de entrada el nombre de una ciudad que recogeremos con un prompt
// Devolverá fuera de la función un coste en función de dicho parámetro
// Recoge el precio fuera de la función en una variable llamada `costeAvion` e
// imprime el valor para comprobar que el cálculo es correcto
// Los costes por ciudad son los siguientes: "Paris": 180 "Boston": 600 "Londres": 120 "
// Interación 3 PASOS
// 1.Añade la función `calcularCosteCoche()` con las características:
// 2.Recibe como parámetro de entrada un número de días de alquiler
// 3. Devuelve el coste en función de dicho parámetro pero teniendo en cuenta los siguientes aspectos:
//   - Cada día de alquiler cuesta 40 €
//   - Si se alquila por tres o más días se obtiene un descuento de 20 €
//   - Si se alquila por 7 días o más se obtiene un descuento de 50 € (no acumulable con los 20 € de haber alquilado por más de 3 días)
// 4 .Recoge el precio fuera de la función en una variable llamada costeCoche y
// 5. comprueba que el cálculo es correcto
// Interación 4:
// 1.Crea otra funcion llamada `calcularCosteViaje()` que tendrá las siguientes características:
// - Recibirá como parámetros de entrada: número de noches, ciudad y días de alquiler
// - Dentro de esta función se llamará a las otras tres para calcular el precio total del viaje
// - Substituiremos los tres alert anteriores por un único alert que muestre el precio total del viaje