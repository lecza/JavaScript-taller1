function parImpar() {
    const numero = Number(prompt("Ingresa el número para verificar si es par o impar"));
    
    (numero % 2 == 0) ? alert("Es par"): alert("Es impar");
}