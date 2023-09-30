function buscarCuadrante() {
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;

    if (x == 0 && y == 0) {
        alert("No se encuentra en ningún cuadrante.");
    }
    else if (x == 0) {
        (y > 0)? alert("El punto se encuentra entre el cuadrante 1 y 4"):alert("El punto se encuentra entre el cuadrante 2 y 3");
    }
    else if (y == 0) {
        (x > 0)?alert("El punto se encuentra entre el cuadrante 1 y 2"):alert("El punto se encuentra entre el cuadrante 3 y 4");
    }
    else if (x > 0 && y > 0) {
        alert("El punto está en el cuadrante 1.");
    }
    else if (x > 0 && y < 0) {
        alert("El punto está en el cuadrante 2.");
    }
    else if (x < 0 && y < 0) {
        alert("El punto está en el cuadrante 3.");
    }
    else if (x < 0 && y > 0) {
        alert("El punto está en el cuadrante 4.");
    }
}