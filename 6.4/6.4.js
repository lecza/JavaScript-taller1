var persona = {
    "nombre": "Carlos Santana",
    "edad": 22,
    "dirección": "Calle 70#15-29",
}

function mostrarData() {
    const dat = Number(document.getElementById("menu").value);
    let muestra = document.getElementById("visualizar");
    switch(dat) {
        case 1: muestra.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-header text-center bg-dark text-light">
                    ${persona.nombre}
                </div>
                <div class="card-body text-start">
                <p class="card-text">Edad: ${persona.edad}</p>
                <p class="card-text">Dirección: ${persona.dirección}</p>
                </div>
            </div>
            `;
            break;
        case 2:
            muestra.innerHTML = `
                <h2>Cambiar datos</h2>
                <input class="form-control mb-2" type="text" id="nombre" placeholder="Ingrese nombre" value="${persona.nombre}" required>
                <input class="form-control mb-2" type="text" id="edad" placeholder="Ingrese Edad" value="${persona.edad}" required>
                <input class="form-control mb-2" type="text" id="direccion" placeholder="Ingrese Dirección" value="${persona.dirección}" required>
                <button class="btn btn-warning" onclick="cambiarDatos()">Cambiar Datos</button>
            `;
            break;
        case 3:
            if (confirm("Está seguro?")) {
                persona.nombre = "Sin Nombre";
                persona.edad = 0;
                persona.dirección = "";
                alert("Se ha eliminado los datos.");
            }
            else {
                alert("No se han hecho cambios.");
            }
            break;
        default: alert("Error."); break;
    }
}

function cambiarDatos() {
    persona.nombre = document.getElementById("nombre").value;
    persona.edad = document.getElementById("edad").value;
    persona.direccion = document.getElementById("direccion").value;
    alert("Cambios realizados.");
}