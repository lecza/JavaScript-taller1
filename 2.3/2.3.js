var datosPersonales = [
    "Virgil Van Dijk",
    32,
    datosPersonales = {
        "nombre": "Liverpool FC",
        "País": "Inglaterra",
        "Puesto": 2,
        "activo": true
    }
]


function verInformacionPersonal() {
    alert("Nombre: " + datosPersonales[0] + "\n" +
    "Edad: " + datosPersonales[1])
}
function verEquipo() {
    let mensaje = "Nombre: " + datosPersonales[2].nombre + "\n"
    + "País: " + datosPersonales[2].País + "\n"
    + "Puesto actual: " + datosPersonales[2].Puesto + "\n"
    + "En competencia: " + datosPersonales[2].activo
    alert(mensaje);
}

function cantidadDatos() {
    alert("Cantidad de datos: " + datosPersonales.length)
}