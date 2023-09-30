/**
 * En este punto se tendrá en cuenta las direcciones cardinales
 * como si se manejaran grados siendo
 * 0° -> Este
 * 90° -> Norte
 * 180° -> Oeste
 * 270° -> Sur
 * 
 * Los datos que estén entre un dato y otro se pondrá de la siguiente forma
 * 0°-90° -> Noreste
 * 90°-180° -> Noroeste
 * 180°-270° -> Suroeste
 * 270°-360° -> Sureste
 */
function calcularUbicacion() {
    const numero = Number(prompt("Ingrese el número cardinal: "));
    console.log(numero);
    if (numero < 0 || numero > 360) alert("Ingrese un número entre 0° y 360°")
    else if (numero == 0 || numero == 360) mensaje(0);
    else if (numero == 90) mensaje(1);
    else if (numero == 180) mensaje(2);
    else if (numero == 270) mensaje(3);
    else if (numero > 0 && numero < 90) mensaje(4);
    else if (numero > 90 && numero < 180) mensaje(5);
    else if (numero > 180 && numero < 270) mensaje(6);
    else if (numero > 270 && numero < 360) mensaje(7);
}

function mensaje(opcion) {
    switch(opcion) {
        case 0: alert("Este"); break;
        case 1: alert("Norte"); break;
        case 2: alert("Oeste"); break;
        case 3: alert("Sur"); break;
        case 4: alert("Noreste"); break;
        case 5: alert("Noroeste"); break;
        case 6: alert("Suroeste"); break;
        case 7: alert("Suroeste"); break;
        default: alert("Error"); break;
    }
}