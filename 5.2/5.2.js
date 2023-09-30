function calcularTemperatura() {
    const celsius = document.getElementById("temperatura").value;
    if (celsius == 0) {
        alert("La temperatura actual es 0");
    }
    else if (celsius > 0) {
        alert("La temperatura está por encima de los 0 grados.");
    }
    else {
        alert("La temperatura está por debajo de los 0 grados.");
    }
}