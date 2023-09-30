function mayorDeEdad() {
    const edad = document.getElementById("edad").value;
    if (edad >= 18) {
        alert("Usted está catalogado como mayor de edad.");
    }
    else {
        alert("Usted está catalogado como menor de edad.");
    }
}