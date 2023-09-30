function calcularArea() {
    const radio = document.getElementById("radio").value;
    const PI = 3.13159;
    document.getElementById("respuesta").textContent = "El área del círculo es: " + PI*Math.pow(radio, 2) + "cm^2";

}