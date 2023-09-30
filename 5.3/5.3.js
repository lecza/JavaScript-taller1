function calcularEtapa() {
    const edad = document.getElementById("edad").value;
    if (edad < 0) {
        alert("No nacido");
    }
    else if (edad >= 0 && edad < 13) {
        alert("Se encuentra en etapa de niñez");
    }
    else if (edad >= 13 && edad <= 19) {
        alert("Se encuentra en la etapa de adolescencia");
    }
    else {
        alert("Adulto mayor");
    }
}