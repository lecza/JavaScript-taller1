function nota() {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    if (verificarRango(nota1) || verificarRango(nota2) || verificarRango(nota3)) {
        alert("Nota no válida.");
    }
    else {
        const promedio = (nota1+ nota2+ nota3)/3;
        if (promedio >= 0 && promedio < 2.5) {
            opciones(1);
        }
        else if ((promedio>=2.5 && promedio<3.5)) {
            opciones(2);
        }
        else if (promedio>=3.5 && promedio<4) {
            opciones(3);
        } 
        else if (promedio>=4 && promedio<5) {
            opciones(4);
        }
    }
}

function verificarRango(nota) {
    return (nota < 0 || nota > 5);
}

function opciones(promedio) {
    switch(promedio) {
        case 1: alert("Insuficiente. Has perdido la materia."); break;
        case 2: alert("Insuficiente. Tienes derecho a habilitar."); break;
        case 3: alert("Aceptable"); break;
        case 4: alert("Excelente"); break;
        default: alert("No válido."); break;
    }
}