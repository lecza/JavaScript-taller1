function parImpar() {
    const numero = document.getElementById("numero").value;
    (numero % 2 == 0)? alert("El número es par"): alert("El número es impar");
}