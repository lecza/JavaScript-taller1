var persona = {
    "nombre": "Luis",
    "edad": 22,
    "direccion": "Calle 1#12-12"
};

function cambiarValores() {
    persona.nombre = document.getElementById("nombre").value;
    persona.edad = document.getElementById("edad").value;
    persona.direccion = document.getElementById("direccion").value;


    verValores();
}


function verValores() {
    document.getElementById("nombre").value = persona.nombre;
    document.getElementById("edad").value = persona.edad;
    document.getElementById("direccion").value = persona.direccion;

    document.getElementById("informacion").innerHTML = `
        <li>Nombre: ${persona.nombre}</li>
        <li>Edad: ${persona.edad}</li>
        <li>Dirección: ${persona.direccion}</li>
    `;
}