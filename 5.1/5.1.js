function tipoNumero() {
    const numero = document.getElementById("numero").value;
    let parrafo = document.getElementById("parrafo");
    if (numero == 0) {
        parrafo.textContent = "El número es 0";
    }
    else if (numero > 0) {
        parrafo.textContent = "El número es positivo";
    }
    else {
        parrafo.textContent = "El número es negativo";
    }
}