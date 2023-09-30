function pasarAFahrenheit() {
    const celsius = document.getElementById("celsius").value;
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = "La temperatura en fahrenheit es: " + (celsius * 1.8 + 32) + "°F";
}