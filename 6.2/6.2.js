function diasPorMes() {
    const mes = Number(document.getElementById("mes").value);
    switch(mes) {
        case 1: alert("Tiene 31 días."); break;
        case 2: alert("Tiene 28 o 29 días."); break;
        case 3: alert("Tiene 31 días."); break;
        case 4: alert("Tiene 30 días."); break;
        case 5: alert("Tiene 31 días."); break;
        case 6: alert("Tiene 30 días."); break;
        case 7: alert("Tiene 31 días."); break;
        case 8: alert("Tiene 31 días."); break;
        case 9: alert("Tiene 30 días."); break;
        case 10: alert("Tiene 31 días."); break;
        case 11: alert("Tiene 30 días."); break;
        case 12: alert("Tiene 31 días."); break;
        default: alert("No existe el mes."); break;
    }
}