a = Number(prompt("Ingrese el primer número: "));
b = Number(prompt("Ingrese el segundo número: "));

if (a == b) {
    console.log("Ambos números son iguales.");
}
else if (a > b) {
    console.log(a + " es mayor que " + b);
}
else {
    console.log(b + " es mayor que " + a);
}