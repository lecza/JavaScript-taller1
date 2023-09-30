var frutas = ["Manzana", "Pera", "Mandarina", "Lulo", "Corozo"];

function eliminarFruta() {
    if (frutas.length <= 0) {
        alert("No se pueden eliminar más frutas.")
    }
    else {
        const listado = document.getElementById("listado");
        frutas.reverse();
        frutas.pop();
        frutas.reverse();
        verFrutas();
        
    }
}

function modificarFruta() {
    const nuevoNombre = document.getElementById("fruta").value;
    frutas[0] = nuevoNombre;
    verFrutas();
}

function agregarFruta() {
    const nuevaFruta = document.getElementById("fruta").value;
    frutas.push(nuevaFruta);
    verFrutas();
}

function verFrutas() {
    listado.innerHTML = ``;
        for(i = 0; i < frutas.length; i++) {
            listado.innerHTML += `
                <li>${frutas[i]}</li>
            `;
        }
}