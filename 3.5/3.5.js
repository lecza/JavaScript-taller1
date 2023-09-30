function compararEdad() {
    let edadA = Number(prompt("Ingrese la primera edad: "));
    let edadB = Number(prompt("Ingrese la segunda edad: "));
    let esMayor = edadA < edadB;
    console.log(edadA + " es mayor que " + edadB + "?: " + esMayor);
}